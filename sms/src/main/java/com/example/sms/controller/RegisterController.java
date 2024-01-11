package com.example.sms.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.service.RegisterService;

@RestController
public class RegisterController {
    
    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestParam Map<String, String> params){
        return ResponseEntity.status(201).body(registerService.registerUser(params));
    }
}
