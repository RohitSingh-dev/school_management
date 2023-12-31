package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Marks;

@Repository
public interface MarksRepository extends CrudRepository<Marks,Integer>{
    
}
