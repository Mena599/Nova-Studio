package com.example.novastudioback.modules.usuario;


import com.example.novastudioback.kernel.ApiResponse;
import com.example.novastudioback.modules.usuario.dtos.LoginDto;
import com.example.novastudioback.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public ResponseEntity<ApiResponse> login(LoginDto dto) {

        Usuario usuario = usuarioRepository.findByUsuario(dto.getUsuario());

        if (usuario == null) {
            ApiResponse response = new ApiResponse("Usuario o contraseña incorrectos", true, HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<>(response, response.getStatus());
        }

        boolean passwordCorrecta = passwordEncoder.matches(dto.getPassword(), usuario.getPassword());

        if (!passwordCorrecta) {
            ApiResponse response = new ApiResponse("Usuario o contraseña incorrectos", true, HttpStatus.UNAUTHORIZED);
            return new ResponseEntity<>(response, response.getStatus());
        }

        String token = jwtUtil.generateToken(usuario.getUsuario());

        Map<String, Object> data = new HashMap<>();
        data.put("token", token);
        data.put("usuario", usuario.getUsuario());

        ApiResponse response = new ApiResponse("Inicio de sesión exitoso", data, HttpStatus.OK);
        return new ResponseEntity<>(response, response.getStatus());
    }
}