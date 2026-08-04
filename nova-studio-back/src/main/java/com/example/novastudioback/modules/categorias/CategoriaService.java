package com.example.novastudioback.modules.categorias;


import com.example.novastudioback.kernel.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getAllCategorias() {
        ApiResponse response = new ApiResponse("Listado de categorías obtenido correctamente", categoriaRepository.findAll(), HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }
}