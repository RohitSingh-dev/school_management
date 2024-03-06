package com.example.sms.controller;

import java.io.IOException;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.Parent;
import com.example.sms.model.ParentResponse;
import com.example.sms.service.ParentService;

@RestController
@RequestMapping("/parent")
public class ParentController {

    @Autowired
    private ParentService service;
    
    @PostMapping("")
    public ResponseEntity<String> createParent(@RequestBody Parent parent){
        service.createParent(parent);
        return new ResponseEntity<String>("Parent registered successfully", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ParentResponse> getParent(@PathVariable int id){
        return new ResponseEntity<ParentResponse>(service.getParent(id),HttpStatus.OK);
    }

    @PutMapping("/{id}/upload")
    public String uploadPicture(@PathVariable int id, @RequestParam("file") MultipartFile img) throws IOException {
        return service.changePicture(img, id);
    }

    @PutMapping("")
    public ResponseEntity<Parent> updateParent(@RequestBody Parent parent){
        Parent updated_parent= service.updateParent(parent);
        return new ResponseEntity<Parent>(updated_parent,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteParent(@PathVariable int id){
        service.deleteParent(id);
        return new ResponseEntity<String>("Parent deleted successfully", HttpStatus.NO_CONTENT);
    }
}
