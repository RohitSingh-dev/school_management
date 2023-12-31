package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.SchoolClass;

@Repository
public interface SchoolClassRepository extends CrudRepository<SchoolClass,Integer>{
    
}
