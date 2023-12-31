package com.example.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.model.AuthenticationModel;
import com.example.sms.service.JwtService;

@RestController
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;
    
    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationModel authenticationModel){
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationModel.getUsername(), authenticationModel.getPassword()));
        }catch(AuthenticationException e){
            return new ResponseEntity<String>( "Invalid Credentials",HttpStatus.UNAUTHORIZED);
        }
        String token= jwtService.generateToken(authenticationModel.getUsername());
        return ResponseEntity.ok().body(token);
    }
}
