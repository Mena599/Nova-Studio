package com.example.novastudioback.modules.citas;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void enviarConfirmacionCita(Citas cita, String linkMeet) {
        try {
            SimpleMailMessage mensaje = new SimpleMailMessage();
            mensaje.setTo(cita.getCorreo());
            mensaje.setSubject("Confirmación de tu cita con Nova Studio");

            DateTimeFormatter formatoFecha = DateTimeFormatter.ofPattern("dd/MM/yyyy");

            String enlaceTexto = (linkMeet != null)
                    ? "Enlace de Google Meet: " + linkMeet + "\n\n"
                    : "";

            String cuerpo = String.format(
                    "Hola %s,\n\n" +
                            "Tu cita con Nova Studio ha sido agendada correctamente.\n\n" +
                            "Fecha: %s\n" +
                            "Hora: %s\n\n" +
                            "%s" +
                            "Te contactaremos pronto para confirmar los detalles de la reunión.\n\n" +
                            "Saludos,\nEquipo Nova Studio",
                    cita.getNombre(),
                    cita.getFecha().format(formatoFecha),
                    cita.getHora().toString(),
                    enlaceTexto
            );

            mensaje.setText(cuerpo);
            mailSender.send(mensaje);

        } catch (Exception e) {
            System.out.println("Error al enviar correo de confirmación: " + e.getMessage());
        }
    }
}