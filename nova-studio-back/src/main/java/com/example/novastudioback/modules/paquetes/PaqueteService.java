package com.example.novastudioback.modules.paquetes;


import com.example.novastudioback.kernel.ApiResponse;
import com.example.novastudioback.modules.categorias.CategoriaRepository;
import com.example.novastudioback.modules.categorias.Categorias;
import com.example.novastudioback.modules.paquetes.dtos.PaqueteDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PaqueteService {

    private final PaqueteRepository paqueteRepository;
    private final CategoriaRepository categoriaRepository;

    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse>  getAllPaquetes(){
    ApiResponse  response  = new ApiResponse("Listado de paquetes obtenido correctamente ", paqueteRepository.findAll(), HttpStatus.OK);
    return new ResponseEntity<>(response, response.getStatus());
     }


    @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> getPaqueteById(Long id){

        Paquetes paquete = paqueteRepository.findById(id).orElse(null);

        ApiResponse response;

        if (paquete == null) {
            response = new ApiResponse("Paquete no encontrado", true, HttpStatus.NOT_FOUND);
        } else {
            response = new ApiResponse("Paquete existente", paquete, HttpStatus.OK);
        }
        return new ResponseEntity<>(response, response.getStatus());
    }

    @Transactional(rollbackFor = Exception.class)
    public ResponseEntity<ApiResponse> savePaquete(PaqueteDto dto){
        ApiResponse response;

        Categorias categoria = categoriaRepository.findById(dto.getIdCategoria()).orElse(null);

        if (categoria == null) {
            response = new ApiResponse("La categria indicada no existe", true, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, response.getStatus());
        }

        Paquetes paquete = new Paquetes();
        paquete.setNombre(dto.getNombre());
        paquete.setDescripcion(dto.getDescripcion());
        paquete.setOrdenAparicion(dto.getOrdenAparicion());
        paquete.setActivo(dto.isActivo());
        paquete.setIncluye(dto.getIncluye());
        paquete.setCategoria(categoria);

        Paquetes guardado = paqueteRepository.save(paquete);

        response = new ApiResponse("Paquete creado correctamente", guardado, HttpStatus.CREATED);
        return new ResponseEntity<>(response, response.getStatus());

    }

    @Transactional(rollbackFor = Exception.class)
    public ResponseEntity<ApiResponse> updatePaquete(Long id, PaqueteDto dto){
        ApiResponse response;

        Paquetes paquete = paqueteRepository.findById(id).orElse(null);
        if (paquete == null) {
            response = new ApiResponse("Paquete no encontrado", true, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, response.getStatus());
        }

        Categorias categoria = categoriaRepository.findById(dto.getIdCategoria()).orElse(null);
        if (categoria == null) {
            response = new ApiResponse("La categoría indicada no existe", true, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, response.getStatus());
        }

        paquete.setNombre(dto.getNombre());
        paquete.setDescripcion(dto.getDescripcion());
        paquete.setOrdenAparicion(dto.getOrdenAparicion());
        paquete.setActivo(dto.isActivo());
        paquete.setIncluye(dto.getIncluye());
        paquete.setCategoria(categoria);

        Paquetes actualizado = paqueteRepository.save(paquete);

        response = new ApiResponse("Paquete actualizado correctamente", actualizado, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }



    @Transactional(rollbackFor = Exception.class)
    public ResponseEntity<ApiResponse> deletePaquete(Long id){
        ApiResponse response;

        Paquetes paquete = paqueteRepository.findById(id).orElse(null);
        if (paquete == null) {
            response = new ApiResponse("Paquete no encontrado", true, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, response.getStatus());
        }

        paqueteRepository.delete(paquete);

        response = new ApiResponse("Paquete eliminado correctamente", null, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }


    
}



/*@Transactional(rollbackFor = Exception.class)
public ResponseEntity<ApiResponse> crear(PaqueteDto dto){

    Categorias categoria = categoriaRepository.findById(dto.getIdCategoria()).orElse(null);
    if (categoria == null) {
        ApiResponse error = new ApiResponse("La categoría indicada no existe", true, HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(error, error.getStatus());
    }

    Paquetes paquete = new Paquetes();
    paquete.setNombre(dto.getNombre());
    paquete.setDescripcion(dto.getDescripcion());
    paquete.setOrdenAparicion(dto.getOrdenAparicion());
    paquete.setActivo(dto.isActivo());
    paquete.setIncluye(dto.getIncluye());
    paquete.setCategoria(categoria);

    Paquetes guardado = paqueteRepository.save(paquete);

    ApiResponse response = new ApiResponse("Paquete creado correctamente", guardado, HttpStatus.CREATED);
    return new ResponseEntity<>(response, response.getStatus());
}*/



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





