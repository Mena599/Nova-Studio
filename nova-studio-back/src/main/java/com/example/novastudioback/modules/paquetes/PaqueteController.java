package com.example.novastudioback.modules.paquetes;

import com.example.novastudioback.kernel.ApiResponse;
import com.example.novastudioback.modules.paquetes.dtos.PaqueteDto;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/api/nova")
@AllArgsConstructor
public class PaqueteController {

    private final PaqueteService paqueteService;

    @GetMapping()
    public ResponseEntity<ApiResponse> getPaquetes(){
        return paqueteService.getAllPaquetes();
    }


    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getPaquete(@PathVariable Long id){
        return paqueteService.getPaqueteById(id);
    }



    @PostMapping
    public ResponseEntity<ApiResponse> crear(@Valid @RequestBody PaqueteDto dto){
        return paqueteService.savePaquete(dto);
    }


    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> update(@PathVariable Long id, @Valid @RequestBody PaqueteDto dto){
        return paqueteService.updatePaquete(id, dto);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> delete(@PathVariable Long id){
        return paqueteService.deletePaquete(id);
    }

    /*
    *
    *
   @Transactional
    public ResponseEntity<ApiResponse> crear(Paquetes paquete, Long idCategoria){

        Categorias categoria = categoriaRepository.findById(idCategoria).orElse(null);
        if (categoria == null) {
            ApiResponse error = new ApiResponse("La categoría indicada no existe", true, HttpStatus.BAD_REQUEST);
            return new ResponseEntity<>(error, error.getStatus());
        }

        paquete.setCategoria(categoria);
        Paquetes guardado = paqueteRepository.save(paquete);

        ApiResponse response = new ApiResponse("Paquete creado correctamente", guardado, HttpStatus.CREATED);
        return new ResponseEntity<>(response, response.getStatus());
    }
    * */


}
