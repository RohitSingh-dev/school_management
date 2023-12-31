package com.example.sms.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.repository.LoginInfoRepository;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        /*String[] userInfo = username.split("_$@_");
        String userType = userInfo[1];
        System.out.println(userType);
        System.out.println(userInfo[0]);

        if (userType.equalsIgnoreCase("student")) {
            Student student = Optional.ofNullable(studentRepository.findByEmailId(userInfo[0]))
                    .orElseThrow(() -> new RuntimeException("Student not found"));
            return User.builder().username(student.getEmailId()).password(student.getPassword()).build();
        } else if (userType.equalsIgnoreCase("teacher")) {
            Teacher teacher = Optional.ofNullable(teacherRepository.findByEmailId(userInfo[0]))
                    .orElseThrow(() -> new RuntimeException("teacher not found"));
            return User.builder().username(teacher.getEmailId()).password(teacher.getPassword()).build();
        } else if (userType.equalsIgnoreCase("parent")) {
            Parent parent = Optional.ofNullable(parentRepository.findByEmailId(userInfo[0]))
                    .orElseThrow(() -> new RuntimeException("parent not found"));
            return User.builder().username(parent.getEmailId()).password(parent.getPassword()).build();
        }

        else
            return null;/* */

        LoginInfo loginInfo = Optional.ofNullable(loginInfoRepository.findByUsername(username))
                    .orElseThrow(() -> new RuntimeException("User not found"));
            return User.builder().username(loginInfo.getUsername()).password(loginInfo.getPassword()).authorities(loginInfo.getRole().name()).build();
    }
}
