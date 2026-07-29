package com.example.novastudioback.modules.paquetes.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaqueteDto {


    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotBlank(message = "La descripción es obligatoria")
    private String descripcion;

    @NotNull(message = "El orden de aparición es obligatorio")
    @Positive(message = "El orden de aparición debe ser mayor a 0")
    private Integer ordenAparicion;

    private boolean activo;

    private List<String> incluye;

    @NotNull(message = "La categoría es obligatoria")
    private Long idCategoria; // <- así viene desde el front, igual que tu genderIds pero para uno solo
}