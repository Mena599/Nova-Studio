package com.example.novastudioback.modules.categorias;

import com.example.novastudioback.kernel.BaseEntity;
import com.example.novastudioback.modules.paquetes.Paquetes;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "categoria")
public class Categorias extends BaseEntity {

    @Column(name = "nombre", nullable = false, unique = true)
    private String nombre;

    @Column(name = "slug", nullable = false, unique = true)
    private String slug;

    @OneToMany(mappedBy = "categoria")
    @JsonIgnore
    private List<Paquetes> paquetes;
}