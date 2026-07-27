package com.example.novastudioback.modules.paquetes;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaqueRepository   extends JpaRepository<Paquetes, Long>
{
}
