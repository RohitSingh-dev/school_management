package com.example.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.Subject;
import com.example.sms.repository.SubjectRepository;

@Service
public class SubjectService {

    @Autowired
    private SubjectRepository repository;
    
    public void createSubject(Subject subject){
        repository.save(subject);
    }

    public Subject getSubject(int id){
        return repository.findById(id).get();
    }

    public Subject updateSubject(Subject subject){
        Subject existingSubject= repository.findById(subject.getId()).get();
        existingSubject.setSub_name(subject.getSub_name());
        repository.save(existingSubject);
        return existingSubject;
    }

    public void deleteSubject(int id){
        repository.deleteById(id);
    }

    public List<Subject> getAllSubjects(){
        return (List<Subject>) repository.findAll();
    }
}
