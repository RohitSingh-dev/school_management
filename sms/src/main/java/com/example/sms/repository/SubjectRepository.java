package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Subject;

@Repository
public interface SubjectRepository extends CrudRepository<Subject,Integer>{
    
}
