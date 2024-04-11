package com.example.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Parent;
import com.example.sms.entity.Student;
import com.example.sms.entity.Teacher;
import com.example.sms.model.LoginResponse;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;
import com.example.sms.repository.ParentRepository;
import com.example.sms.repository.StudentRepository;
import com.example.sms.repository.TeacherRepository;

@Service
public class LoginService {

    @Autowired
    private LoginInfoRepository loginInfoRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private ParentRepository parentRepository;
    
    public LoginResponse login(String username, String token){
        LoginInfo loginInfo= loginInfoRepository.findByUsername(username);
        UserType user_role= loginInfo.getRole();
        int id=0;
        String name="";
        if(user_role.equals(UserType.STUDENT)){
            Student student= studentRepository.findByEmailId(username);
            id= student.getId();
            name= student.getName();
        }
        else if(user_role.equals(UserType.PARENT)){
            Parent parent= parentRepository.findByEmailId(username);
            id= parent.getId();
            name= parent.getName();
        }
        else if(user_role.equals(UserType.TEACHER)){
            Teacher teacher= teacherRepository.findByEmailId(username);
            id= teacher.getId();
            name= teacher.getName();
        }
        LoginResponse loginResponse= new LoginResponse();
        loginResponse.setUser_id(id);
        loginResponse.setUser_name(name);
        loginResponse.setUser_role(user_role.name());
        loginResponse.setUser_token(token);
        return loginResponse;
    }
}
