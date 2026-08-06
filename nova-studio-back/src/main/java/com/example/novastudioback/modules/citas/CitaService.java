package com.example.novastudioback.modules.citas;

import com.example.novastudioback.kernel.ApiResponse;
import com.example.novastudioback.modules.citas.dtos.CitaDto;
import com.example.novastudioback.modules.paquetes.Paquetes;
import com.example.novastudioback.modules.paquetes.PaqueteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CitaService {

    private final CitasRepository citaRepository;
    private final PaqueteRepository paqueteRepository;
    private final EmailService emailService;
    private final GoogleCalendarService googleCalendarService;

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getHorariosDisponibles(LocalDate fecha) {

        if (!HorarioAtencion.esDiaHabil(fecha.getDayOfWeek())) {
            ApiResponse response = new ApiResponse("La fecha seleccionada no es un día hábil", true, HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(response, response.getStatus());
        }

        List<Citas> citasDelDia = citaRepository.findByFecha(fecha);

        List<LocalTime> horasOcupadas = citasDelDia.stream()
                .map(Citas::getHora)
                .collect(Collectors.toList());

        List<LocalTime> horariosLibres = HorarioAtencion.HORARIOS_DISPONIBLES.stream()
                .filter(hora -> !horasOcupadas.contains(hora))
                .collect(Collectors.toList());

        ApiResponse response = new ApiResponse("Horarios disponibles obtenidos correctamente", horariosLibres, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }

    @Transactional(rollbackFor = Exception.class)
    public ResponseEntity<ApiResponse> agendarCita(CitaDto dto) {

        if (!HorarioAtencion.esDiaHabil(dto.getFecha().getDayOfWeek())) {
            ApiResponse response = new ApiResponse("Solo se pueden agendar citas de Lunes a Viernes", true, HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(response, response.getStatus());
        }

        if (!HorarioAtencion.HORARIOS_DISPONIBLES.contains(dto.getHora())) {
            ApiResponse response = new ApiResponse("El horario seleccionado no es válido", true, HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(response, response.getStatus());
        }

        boolean horarioOcupado = citaRepository.findByFecha(dto.getFecha()).stream()
                .anyMatch(cita -> cita.getHora().equals(dto.getHora()));

        if (horarioOcupado) {
            ApiResponse response = new ApiResponse("Ese horario ya fue reservado, elige otro", true, HttpStatus.CONFLICT);
            return new ResponseEntity<>(response, response.getStatus());
        }

        Paquetes paquete = null;
        if (dto.getIdPaquete() != null) {
            paquete = paqueteRepository.findById(dto.getIdPaquete()).orElse(null);
        }

        Citas cita = new Citas();
        cita.setNombre(dto.getNombre());
        cita.setCorreo(dto.getCorreo());
        cita.setTelefono(dto.getTelefono());
        cita.setNombreNegocio(dto.getNombreNegocio());
        cita.setPaquete(paquete);
        cita.setFecha(dto.getFecha());
        cita.setHora(dto.getHora());
        cita.setMensaje(dto.getMensaje());
        cita.setEstado("PENDIENTE");

        Citas guardada = citaRepository.save(cita);

        String linkMeet = null;

        // NUEVO — crear el evento en Google Calendar
        try {
            LocalDateTime inicio = LocalDateTime.of(dto.getFecha(), dto.getHora());
            LocalDateTime fin = inicio.plusHours(1);

            linkMeet = googleCalendarService.crearEventoConMeet(guardada, inicio, fin);  // CAMBIO: le pasas "guardada" completa

        } catch (Exception e) {
            System.out.println("Error al crear evento en Google Calendar: " + e.getMessage());
        }
        emailService.enviarConfirmacionCita(guardada, linkMeet);

        ApiResponse response = new ApiResponse("Cita agendada correctamente", guardada, HttpStatus.CREATED);
        return new ResponseEntity<>(response, response.getStatus());
    }



}