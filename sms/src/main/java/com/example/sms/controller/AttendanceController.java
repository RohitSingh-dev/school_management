package com.example.sms.controller;

import java.io.IOException;
import java.sql.Date;
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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.Attendance;
import com.example.sms.model.AttendanceResponse;
import com.example.sms.model.TeacherAttendanceResponse;
import com.example.sms.service.AttendanceService;
import com.opencsv.exceptions.CsvValidationException;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {
    
    @Autowired
    private AttendanceService service;

    @PostMapping("")
    public ResponseEntity<String> createAttendance(@RequestBody Attendance attendance){
        return new ResponseEntity<String>(service.createAttendance(attendance), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AttendanceResponse> getAttendanceByStudent(@PathVariable int id){
        return new ResponseEntity<AttendanceResponse>(service.getAttendanceByStudent(id), HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Attendance> updateAttendance(@RequestBody Attendance attendance){
        return new ResponseEntity<Attendance>(service.updateAttendance(attendance), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAttendance(@PathVariable int id){
        return new ResponseEntity<String>(service.deleteAttendance(id), HttpStatus.NO_CONTENT);
    }

    @GetMapping("/schoolClass/{id}")
    public ResponseEntity<TeacherAttendanceResponse> getAttendanceByClass(@PathVariable int id, @RequestHeader("User") int auth){
        return new ResponseEntity<TeacherAttendanceResponse>(service.getAttendanceByClass(id, auth), HttpStatus.OK);
    }

    @PostMapping(value = "/bulkupload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> bulkupload(@RequestParam("file") MultipartFile file) throws IOException, CsvValidationException {
        return ResponseEntity.ok().body(service.bulkupload(file));
    }

    @GetMapping("/date")
    public ResponseEntity<List<Attendance>> getAttendanceByDate(@RequestParam Date date){
        return new ResponseEntity<List<Attendance>>(service.getAttendanceByDate(date), HttpStatus.OK);
    }
}
