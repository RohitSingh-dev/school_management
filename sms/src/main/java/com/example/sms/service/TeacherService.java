package com.example.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Teacher;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;
import com.example.sms.repository.TeacherRepository;

@Service
public class TeacherService {

    @Autowired
    private TeacherRepository repository;

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public void createTeacher(Teacher teacher){
        teacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        LoginInfo loginInfo= new LoginInfo(teacher.getEmailId(), teacher.getPassword(), UserType.TEACHER);
        loginInfoRepository.save(loginInfo);
        repository.save(teacher);
    }

    public Teacher getTeacher(int id){
        return repository.findById(id).get();
    }

    public Teacher updateTeacher(Teacher teacher){
        Teacher existingTeacher= repository.findById(teacher.getId()).get();
        existingTeacher.setName(teacher.getName());
        existingTeacher.setEmailId(teacher.getEmailId());
        existingTeacher.setAddress(teacher.getAddress());
        existingTeacher.setContact_info(teacher.getContact_info());
        existingTeacher.setDate_of_birth(teacher.getDate_of_birth());
        existingTeacher.setSubjects(teacher.getSubjects());
        repository.save(existingTeacher);
        return existingTeacher;
    }

    public void deleteTeacher(int id){
        repository.deleteById(id);
    }

    public List<Teacher> getAllTeacher() {
        return (List<Teacher>) repository.findAll();
    }
}