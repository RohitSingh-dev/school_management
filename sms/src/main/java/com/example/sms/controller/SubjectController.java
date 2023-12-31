package com.example.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sms.entity.Subject;
import com.example.sms.service.SubjectService;

@RestController
@RequestMapping("/subject")
public class SubjectController {
    
    @Autowired
    private SubjectService service;

    @PostMapping("")
    public ResponseEntity<String> createSubject(@RequestBody Subject subject){
        service.createSubject(subject);
        return new ResponseEntity<String>("Subject registered successfully", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subject> getSubject(@PathVariable int id){
        Subject subject= service.getSubject(id);
        return new ResponseEntity<Subject>(subject, HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Subject> updateSubject(@RequestBody Subject subject){
        Subject updatedSubject= service.updateSubject(subject);
        return new ResponseEntity<Subject>(updatedSubject, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSubject(@PathVariable int id){
        service.deleteSubject(id);
        return new ResponseEntity<String>("Subject deleted successfully",HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Subject>> getAllSubjects(){
        return new ResponseEntity<List<Subject>>(service.getAllSubjects(), HttpStatus.OK);
    }
}
