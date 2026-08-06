package com.example.novastudioback.modules.citas;

import com.example.novastudioback.kernel.BaseEntity;
import com.example.novastudioback.modules.paquetes.Paquetes;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "citas")
public class Citas extends BaseEntity {

    @Column(name = "nombre", nullable = false)
    private String nombre;

    @Column(name = "correo", nullable = false)
    private String correo;

    @Column(name = "telefono", nullable = false)
    private String telefono;

    @Column(name = "nombre_negocio")
    private String nombreNegocio;

    @ManyToOne
    @JoinColumn(name = "id_paquete")
    private Paquetes paquete;

    @Column(name = "fecha", nullable = false)
    private LocalDate fecha;

    @Column(name = "hora", nullable = false)
    private LocalTime hora;

    @Column(name = "mensaje", length = 1000)
    private String mensaje;

    @Column(name = "estado", nullable = false)
    private String estado; // PENDIENTE, CONFIRMADA, CANCELADA
}