package com.example.sms.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student,Integer> {

    public List<Student> findBySchoolClass_Id(int id);

    public List<Student> findByParent_Id(int id);

    public Student findByEmailId(String email_id);
    
}
