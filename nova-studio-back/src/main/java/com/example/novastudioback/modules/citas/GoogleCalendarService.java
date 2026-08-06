package com.example.novastudioback.modules.citas;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.calendar.Calendar;
import com.google.api.services.calendar.CalendarScopes;
import com.google.api.services.calendar.model.ConferenceData;
import com.google.api.services.calendar.model.ConferenceSolutionKey;
import com.google.api.services.calendar.model.CreateConferenceRequest;
import com.google.api.services.calendar.model.Event;
import com.google.api.services.calendar.model.EventDateTime;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class GoogleCalendarService {

    private static final String APPLICATION_NAME = "Nova Studio Citas";
    private static final GsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final String TOKENS_DIRECTORY_PATH = "tokens";
    private static final List<String> SCOPES = Collections.singletonList(CalendarScopes.CALENDAR);
    private static final String CREDENTIALS_FILE_PATH = "/credentials/google-credentials.json";

    private Calendar getCalendarService() throws Exception {
        var httpTransport = GoogleNetHttpTransport.newTrustedTransport();
        Credential credential = getCredentials(httpTransport);

        return new Calendar.Builder(httpTransport, JSON_FACTORY, credential)
                .setApplicationName(APPLICATION_NAME)
                .build();
    }

    private Credential getCredentials(com.google.api.client.http.HttpTransport httpTransport) throws Exception {
        InputStreamReader in = new InputStreamReader(
                GoogleCalendarService.class.getResourceAsStream(CREDENTIALS_FILE_PATH));
        GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, in);

        GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
                httpTransport, JSON_FACTORY, clientSecrets, SCOPES)
                .setDataStoreFactory(new FileDataStoreFactory(new File(TOKENS_DIRECTORY_PATH)))
                .setAccessType("offline")
                .build();

        LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
        return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
    }

    public String crearEventoConMeet(Citas cita, LocalDateTime inicio, LocalDateTime fin) throws Exception {

        Calendar service = getCalendarService();

        String nombrePaquete = (cita.getPaquete() != null) ? cita.getPaquete().getNombre() : "No especificado";
        String negocio = (cita.getNombreNegocio() != null && !cita.getNombreNegocio().isBlank())
                ? cita.getNombreNegocio() : "No especificado";
        String mensajeCliente = (cita.getMensaje() != null && !cita.getMensaje().isBlank())
                ? cita.getMensaje() : "Sin mensaje adicional";

        String descripcion = String.format(
                "Cita agendada desde el sitio web de Nova Studio.\n\n" +
                        "Teléfono: %s\n" +
                        "Correo: %s\n" +
                        "Negocio: %s\n" +
                        "Paquete de interés: %s\n\n" +
                        "Mensaje del cliente:\n%s",
                cita.getTelefono(),
                cita.getCorreo(),
                negocio,
                nombrePaquete,
                mensajeCliente
        );

        Event evento = new Event()
                .setSummary("Cita con Nova Studio - " + cita.getNombre())
                .setDescription(descripcion);

        ZoneId zonaHoraria = ZoneId.of("America/Mexico_City");

        Date fechaInicio = Date.from(inicio.atZone(zonaHoraria).toInstant());
        Date fechaFin = Date.from(fin.atZone(zonaHoraria).toInstant());

        EventDateTime eventDateTimeInicio = new EventDateTime()
                .setDateTime(new com.google.api.client.util.DateTime(fechaInicio))
                .setTimeZone("America/Mexico_City");

        EventDateTime eventDateTimeFin = new EventDateTime()
                .setDateTime(new com.google.api.client.util.DateTime(fechaFin))
                .setTimeZone("America/Mexico_City");

        evento.setStart(eventDateTimeInicio);
        evento.setEnd(eventDateTimeFin);

        ConferenceData conferenceData = new ConferenceData()
                .setCreateRequest(new CreateConferenceRequest()
                        .setRequestId("cita-" + System.currentTimeMillis())
                        .setConferenceSolutionKey(new ConferenceSolutionKey().setType("hangoutsMeet")));

        evento.setConferenceData(conferenceData);

        Event eventoCreado = service.events()
                .insert("primary", evento)
                .setConferenceDataVersion(1)
                .execute();

        return eventoCreado.getHangoutLink();
    }
}