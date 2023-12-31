package com.example.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.SchoolClass;
import com.example.sms.repository.SchoolClassRepository;

@Service
public class SchoolClassService {
    
    @Autowired
    private SchoolClassRepository repository;

    public void createSchoolClass(SchoolClass schoolClass){
        repository.save(schoolClass);
    }

    public SchoolClass getSchoolClass(int id){
        return repository.findById(id).get();
    }

    public SchoolClass updateSchoolClass(SchoolClass schoolClass){
        SchoolClass existingSchoolClass= repository.findById(schoolClass.getId()).get();
        existingSchoolClass.setClass_name(schoolClass.getClass_name());
        existingSchoolClass.setTeacher(schoolClass.getTeacher());
        repository.save(existingSchoolClass);
        return existingSchoolClass;
    }

    public void deleteSchoolClass(int id){
        repository.deleteById(id);
    }

    public List<SchoolClass> getAllSchoolClass(){
        return (List<SchoolClass>) repository.findAll();
    }

}
