package com.example.novastudioback.modules.citas;


import java.time.DayOfWeek;
import java.time.LocalTime;
import java.util.List;

public class HorarioAtencion {

    public static final List<LocalTime> HORARIOS_DISPONIBLES = List.of(
            LocalTime.of(9, 0),
            LocalTime.of(10, 0),
            LocalTime.of(11, 0),
            LocalTime.of(12, 0),
            LocalTime.of(13, 0),
            LocalTime.of(14, 0),
            LocalTime.of(15, 0),
            LocalTime.of(16, 0),
            LocalTime.of(17, 0)
    );

    public static boolean esDiaHabil(DayOfWeek dia) {
        return dia != DayOfWeek.SATURDAY && dia != DayOfWeek.SUNDAY;
    }
}