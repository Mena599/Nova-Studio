package com.example.novastudioback.modules.paquetes;


import com.example.novastudioback.kernel.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PaqueteService {

    private final PaqueRepository paqueteRepository;

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
     }

     /*
     *
     *  @Transactional(readOnly = true)
    public ResponseEntity<ApiResponse> searchBooks(Long id){
        ApiResponse  response = null;

        Book book = bookRepository.findById(id).orElse(null);

        if(book == null){
            response = new ApiResponse("Buook No encontrado", true, HttpStatus.NOT_FOUND);
        }else {
            response = new ApiResponse("Buook encontrado", book, HttpStatus.OK);
        }

        return new ResponseEntity<>(response, response.getStatus());
    }
     *
     * */





