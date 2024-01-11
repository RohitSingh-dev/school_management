package com.example.sms.service;

import java.util.Map;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;

@Service
public class RegisterService {
    
    @Autowired
    private LoginInfoRepository loginInfoRepository;

    public String registerUser(Map<String, String> params){
        LoginInfo loginInfo= loginInfoRepository.findByUsername(params.get("username"));
        if(Objects.nonNull(loginInfo)){
            throw new RuntimeException("User already exists, Enter different username");
        }
        UserType userType= UserType.getUserType(params.get("role"));
        loginInfo= new LoginInfo(params.get("username"), params.get("password"), userType);
        loginInfoRepository.save(loginInfo);
        return "User Registered, Please Login to Continue";
    }
}
