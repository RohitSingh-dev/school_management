package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Vehicle;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle,Integer>{
    
}
