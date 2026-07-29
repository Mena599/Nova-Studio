package com.example.novastudioback.modules.categorias;

import com.example.novastudioback.modules.paquetes.Paquetes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository  extends JpaRepository<Categorias, Long> {
}
