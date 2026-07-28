package com.example.novastudioback.modules.paquetes;

import com.example.novastudioback.kernel.ApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/nova")
@AllArgsConstructor
public class PauqueteController {

    private final PaqueteService paqueteService;

    @GetMapping()
    public ResponseEntity<ApiResponse> getPaquetes(){
        return paqueteService.getAllPaquetes();
    }
}
