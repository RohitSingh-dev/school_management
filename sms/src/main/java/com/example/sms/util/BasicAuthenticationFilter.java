package com.example.sms.util;

import java.io.IOException;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class BasicAuthenticationFilter{

    @Autowired
    private AuthenticationManager authenticationManager;


    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        String authHeader= request.getHeader("Authorization");
        String username, password;
        authHeader= authHeader.substring(6);
        String[] auth= authHeader.split(":");
        username= auth[0];
        password= auth[1];
        if(Objects.nonNull(username) && Objects.nonNull(password)){
            UsernamePasswordAuthenticationToken token= new UsernamePasswordAuthenticationToken(username, password);
            authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(token);
        }
        
        filterChain.doFilter(request, response);
    }

}
