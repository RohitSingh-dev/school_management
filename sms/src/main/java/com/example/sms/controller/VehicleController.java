package com.example.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.entity.Vehicle;
import com.example.sms.service.VehicleService;

@RestController
public class VehicleController {

    @Autowired
    private VehicleService service;

    @PostMapping("/vehicle")
    public ResponseEntity<String> createVehicle(@RequestBody Vehicle vehicle){
        return new ResponseEntity<String>(service.createVehicle(vehicle), HttpStatus.CREATED);
    }

    @GetMapping("/vehicle/{id}")
    public ResponseEntity<Vehicle> getVehicle(@PathVariable int id){
        return new ResponseEntity<Vehicle>(service.getVehicle(id), HttpStatus.OK);
    }

    @PutMapping("/vehicle")
    public ResponseEntity<Vehicle> updateVehicle(@RequestBody Vehicle vehicle){
        return new ResponseEntity<Vehicle>(service.updatVehicle(vehicle), HttpStatus.OK);
    }

    @DeleteMapping("/vehicle/{id}")
    public ResponseEntity<String> deleteVehicle(@PathVariable int id){
        return new ResponseEntity<String>(service.deleteVehicle(id),HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Vehicle>> getAllVehicle(){
        return new ResponseEntity<List<Vehicle>>(service.getAllVehicles(), HttpStatus.OK);
    }
    
}
