package com.example.sms.controller;

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

import com.example.sms.entity.Marks;
import com.example.sms.service.MarksService;

@RestController
@RequestMapping("/marks")
public class MarksController {

    @Autowired
    private MarksService service;
    
    @PostMapping("")
    public ResponseEntity<?> createMarks(@RequestBody Marks marks){
        service.createMarks(marks);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Marks> getMarks(@PathVariable int id){
        return new ResponseEntity<Marks>(service.getMarks(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Marks> updateMarks(@RequestBody Marks marks){
        return new ResponseEntity<Marks>(service.updateMarks(marks), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMarks(@PathVariable int id){
        service.deleteMarks(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
