package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Teacher;

@Repository
public interface TeacherRepository extends CrudRepository<Teacher,Integer>{
    
    public Teacher findByEmailId(String emailId);
}
