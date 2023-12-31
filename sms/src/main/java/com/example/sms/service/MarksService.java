package com.example.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.Marks;
import com.example.sms.repository.MarksRepository;

@Service
public class MarksService {

    private @Autowired
    MarksRepository repository;
    
    public void createMarks(Marks marks){
        repository.save(marks);
    }

    public Marks getMarks(int id){
        return repository.findById(id).get();
    }

    public Marks updateMarks(Marks marks){
        Marks existingMarks= repository.findById(marks.getId()).get();
        existingMarks.setSubject(marks.getSubject());
        existingMarks.setMarks_obtained(marks.getMarks_obtained());
        repository.save(existingMarks);
        return existingMarks;
    }

    public void deleteMarks(int id){
        repository.deleteById(id);
    }
}
