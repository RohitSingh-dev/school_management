package com.example.sms.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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

import com.example.sms.entity.Result;
import com.example.sms.model.ResultResponse;
import com.example.sms.model.TeacherResultResponse;
import com.example.sms.service.ResultService;
import com.opencsv.exceptions.CsvValidationException;

@RestController
@RequestMapping("/result")
public class ResultController {
    
    @Autowired
    private ResultService service;

    @PostMapping("")
    public ResponseEntity<String> createResult(@RequestBody Result result){
        service.createResult(result);
        return new ResponseEntity<String>("Result added", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResultResponse> getResult(@PathVariable int id){
        return new ResponseEntity<ResultResponse>(service.getResult(id),HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Result> updateResult(@RequestBody Result result){
        Result updated_result= service.updateResult(result);
        return new ResponseEntity<Result>(updated_result,HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteResult(@PathVariable int id){
        service.deleteResult(id);
        return new ResponseEntity<String>("Result Deleted successfully", HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/getAll")
    public ResponseEntity<List<Result>> getAllResult(){
        return new ResponseEntity<List<Result>>(service.getAllResult(), HttpStatus.OK);
    }

    @GetMapping("/schoolClass/{id}")
    public ResponseEntity<TeacherResultResponse> getResultsByClass(@PathVariable int id){
        return new ResponseEntity<TeacherResultResponse>(service.getResultsByClass(id), HttpStatus.OK);
    }

    @PostMapping(value = "/bulkupload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> bulkupload(@RequestParam("file") MultipartFile file) throws IOException, CsvValidationException {
        return ResponseEntity.ok().body(service.bulkupload(file));
    }

    @GetMapping("/passed")
    public ResponseEntity<List<Result>> getResultsOfPassedStudents(){
        return new ResponseEntity<List<Result>>(service.getResultsOfPassedStudents(), HttpStatus.OK);
    }
}
