package com.example.novastudioback.modules.citas;

import com.example.novastudioback.kernel.ApiResponse;
import com.example.novastudioback.modules.citas.dtos.CitaDto;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/nova/citas")
@RequiredArgsConstructor
public class CitaController {

    private final CitaService citaService;

    @GetMapping("/disponibilidad")
    public ResponseEntity<ApiResponse> getDisponibilidad(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha
    ) {
        return citaService.getHorariosDisponibles(fecha);
    }

    @PostMapping
    public ResponseEntity<ApiResponse> agendar(@Valid @RequestBody CitaDto dto) {
        return citaService.agendarCita(dto);
    }
}