package com.example.sms.service;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Teacher;
import com.example.sms.model.TeacherResponse;
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

    public TeacherResponse getTeacher(int id){
        Teacher teacher= repository.findById(id).get();
        validateLoggedInUser(teacher);
        TeacherResponse teacherResponse = new TeacherResponse();
        teacherResponse.setName(teacher.getName());
        teacherResponse.setAddress(teacher.getAddress());
        teacherResponse.setEmailId(teacher.getEmailId());
        teacherResponse.setContact_info(teacher.getContact_info());
        teacherResponse.setDate_of_birth(teacher.getDate_of_birth());
        teacherResponse.setDate_of_joining(teacher.getDate_of_joining());
        teacherResponse.setDate_of_exit(teacher.getDate_of_exit());
        teacherResponse.setPic(teacher.getPic());
        return teacherResponse;
    }

    public Teacher updateTeacher(Teacher teacher){
        validateLoggedInUser(teacher);
        Teacher existingTeacher= repository.findById(teacher.getId()).get();
        existingTeacher.setName(teacher.getName());
        existingTeacher.setEmailId(teacher.getEmailId());
        existingTeacher.setAddress(teacher.getAddress());
        existingTeacher.setContact_info(teacher.getContact_info());
        existingTeacher.setDate_of_birth(teacher.getDate_of_birth());
        existingTeacher.setPassword(passwordEncoder.encode(teacher.getPassword()));
        repository.save(existingTeacher);
        return existingTeacher;
    }

    public void deleteTeacher(int id){
        validateLoggedInUser(repository.findById(id).get());
        repository.deleteById(id);
    }

    public String changePicture(MultipartFile image, int id) throws IOException{
        Teacher existingtTeacher= repository.findById(id).get();
        existingtTeacher.setPic(new String(Base64.getEncoder().encode(image.getBytes())));
        repository.save(existingtTeacher);
        return "Picture uploaded successfully";
    }

    public List<Teacher> getAllTeacher() {
        return (List<Teacher>) repository.findAll();
    }

    public void validateLoggedInUser(Teacher teacher){
        UserDetails userDetails= (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Teacher loggedInTeacher = repository.findByEmailId(userDetails.getUsername());
        if(loggedInTeacher.getId()!= teacher.getId()){
            throw new RuntimeException("Invalid User");
        }
    }

}