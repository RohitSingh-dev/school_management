package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Parent;

@Repository
public interface ParentRepository extends CrudRepository<Parent,Integer>{
    
    public Parent findByEmailId(String emailId);
}
