package com.example.sms.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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

import com.example.sms.entity.Student;
import com.example.sms.service.StudentService;
import com.opencsv.exceptions.CsvValidationException;


@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("")
    public ResponseEntity<String> createStudent(@RequestBody Student student) {
        service.createStudent(student);
        return new ResponseEntity<String>("Student registered successfully", HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        Student student = service.getStudent(id);
        return new ResponseEntity<Student>(student, HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
        Student updated_student = service.updateStudent(student);
        return new ResponseEntity<Student>(updated_student, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
        return new ResponseEntity<String>("Student Deleted successfully", HttpStatus.NO_CONTENT);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Student>> getAllStudent() {
        return new ResponseEntity<List<Student>>(service.getAllStudent(), HttpStatus.OK);
    }

    @GetMapping("/schoolClass/{id}")
    public ResponseEntity<List<Student>> getAllStudentsByClass(@PathVariable int id) {
        return new ResponseEntity<List<Student>>(service.getAllStudentsByClass(id), HttpStatus.OK);
    }

    @GetMapping("/parent/{id}")
    public ResponseEntity<List<Student>> getAllStudentsByParent(@PathVariable int id) {
        return new ResponseEntity<List<Student>>(service.getAllStudentsByParent(id), HttpStatus.OK);
    }

    @PutMapping("/{id}/upload")
    public String uploadPicture(@PathVariable int id, @RequestParam("file") MultipartFile img) throws IOException {
        return service.changePicture(img, id);
    }

    @PutMapping("/bulkupload")
    public String bulkupload(@RequestParam("file") MultipartFile file) throws IOException, CsvValidationException {
        return service.bulkupload(file);
    }

    @GetMapping("/csvDownload")
    public ResponseEntity<?> getAllStudentsInCsv() throws IOException {
        return ResponseEntity.ok().contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"studentsData.csv\"")
                .body(service.writeStudentsToCsv());
    }

    @GetMapping("/picDownload/{id}")
    public ResponseEntity<?> getStudentPic(@PathVariable int id) throws IOException {
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"studentpic.jpg\"")
                .body(service.getStudent(id).getPic());
    }
}
