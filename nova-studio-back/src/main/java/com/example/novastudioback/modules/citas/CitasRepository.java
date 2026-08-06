package com.example.novastudioback.modules.citas;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface CitasRepository extends JpaRepository<Citas, Long> {
    List<Citas> findByFecha(LocalDate fecha);
}