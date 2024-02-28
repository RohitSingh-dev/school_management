package com.example.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.Vehicle;
import com.example.sms.repository.VehicleRepository;

@Service
@SuppressWarnings("null")
public class VehicleService {
    
    @Autowired
    private VehicleRepository repository;

    public String createVehicle(Vehicle vehicle){
        repository.save(vehicle);
        return "Vehicle registered successfully";
    }

    public Vehicle getVehicle(int id){
        return repository.findById(id).get();
    }

    public Vehicle updatVehicle(Vehicle vehicle){
        Vehicle existingVehicle= repository.findById(vehicle.getId()).get();
        existingVehicle.setRoute(vehicle.getRoute());
        existingVehicle.setCapacity(vehicle.getCapacity());
        existingVehicle.setVeh_num(vehicle.getVeh_num());
        repository.save(existingVehicle);
        return existingVehicle;
    }

    public String deleteVehicle(int id){
        repository.deleteById(id);
        return "Vehicle deleted successfully";
    }

    public List<Vehicle> getAllVehicles(){
        return (List<Vehicle>) repository.findAll();
    }
}
