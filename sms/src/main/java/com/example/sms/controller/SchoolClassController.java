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

import com.example.sms.entity.SchoolClass;
import com.example.sms.service.SchoolClassService;

@RestController
@RequestMapping("/schoolClass")
public class SchoolClassController {
    
    @Autowired
    private SchoolClassService service;

    @PostMapping("")
    public ResponseEntity<String> createSubject(@RequestBody SchoolClass schoolClass){
        service.createSchoolClass(schoolClass);
        return new ResponseEntity<String>("Class registered successfully", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SchoolClass> getSchoolClass(@PathVariable int id){
        SchoolClass schoolClass= service.getSchoolClass(id);
        return new ResponseEntity<SchoolClass>(schoolClass, HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<SchoolClass> updateSchoolClass(@RequestBody SchoolClass schoolClass){
        SchoolClass updatedSchoolClass= service.updateSchoolClass(schoolClass);
        return new ResponseEntity<SchoolClass>(updatedSchoolClass, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSubject(@PathVariable int id){
        service.deleteSchoolClass(id);
        return new ResponseEntity<String>("Class deleted successfully",HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<SchoolClass>> getAllSchoolClass(){
        return new ResponseEntity<List<SchoolClass>>(service.getAllSchoolClass(), HttpStatus.OK);
    }
}
