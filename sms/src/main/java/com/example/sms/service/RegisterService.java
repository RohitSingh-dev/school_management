package com.example.sms.service;

import java.sql.Date;
import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Parent;
import com.example.sms.entity.Student;
import com.example.sms.entity.Teacher;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;
import com.example.sms.repository.ParentRepository;
import com.example.sms.repository.StudentRepository;
import com.example.sms.repository.TeacherRepository;

@Service
public class RegisterService {
    
    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private ParentRepository parentRepository;

    public String registerUser(Map<String, String> params){
        LoginInfo loginInfo= loginInfoRepository.findByUsername(params.get("username"));
        if(Objects.nonNull(loginInfo)){
            throw new RuntimeException("User already exists, Enter different username");
        }
         ;
        if(UserType.getUserType(params.get("role")).equals(UserType.STUDENT)){
            loginInfo= new LoginInfo(params.get("username"), params.get("password"), UserType.STUDENT);
            loginInfoRepository.save(loginInfo);
            Student student= new Student();
            student.setEmailId(loginInfo.getUsername());
            student.setDate_of_reg(new Date(System.currentTimeMillis()));
            studentRepository.save(student);
        }
        else if(UserType.getUserType(params.get("role")).equals(UserType.TEACHER)){
            loginInfo= new LoginInfo(params.get("username"), params.get("password"), UserType.STUDENT);
            loginInfoRepository.save(loginInfo);
            Teacher teacher= new Teacher();
            teacher.setEmailId(loginInfo.getUsername());
            teacher.setDate_of_joining(new Date(System.currentTimeMillis()));
            teacherRepository.save(teacher);
        }
        else{
            loginInfo= new LoginInfo(params.get("username"), params.get("password"), UserType.STUDENT);
            loginInfoRepository.save(loginInfo);
            Parent parent = new Parent();
            parent.setEmailId(loginInfo.getUsername());
            parentRepository.save(parent);
        }

        return "User Registered, Please Login to Continue";
    }
}
