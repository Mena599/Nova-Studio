package com.example.novastudioback.modules.paquetes;

import com.example.novastudioback.kernel.BaseEntity;
import com.example.novastudioback.modules.categorias.Categorias;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "paquetes")
public class Paquetes extends BaseEntity {

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "orden_aparicion")
    private Integer ordenAparicion;

    @Column(name = "activo")
    private boolean activo;

    @ElementCollection
    @CollectionTable(name = "paquete_incluye", joinColumns = @JoinColumn(name = "paquete_id"))
    @Column(name = "item")
    private List<String> incluye;

    @ManyToOne
    @JoinColumn(name = "id_categoria", nullable = false)
    private Categorias categoria;
}