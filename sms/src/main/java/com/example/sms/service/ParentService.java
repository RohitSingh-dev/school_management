package com.example.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Parent;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;
import com.example.sms.repository.ParentRepository;

@Service
public class ParentService {
    
    @Autowired
    private ParentRepository repository;

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void createParent(Parent parent){
        parent.setPassword(passwordEncoder.encode(parent.getPassword()));
        LoginInfo loginInfo= new LoginInfo(parent.getEmailId(), parent.getPassword(), UserType.PARENT);
        loginInfoRepository.save(loginInfo);
        repository.save(parent);
    }

    public Parent getParent(int id){
        return repository.findById(id).get();
    }

    public Parent updateParent(Parent parent){
        Parent existingParent= repository.findById(parent.getId()).get();
        existingParent.setName(parent.getName());
        existingParent.setAddress(parent.getAddress());
        existingParent.setEmailId(parent.getEmailId());
        existingParent.setContact_info(parent.getContact_info());
        repository.save(existingParent);
        return existingParent;
    }

    public void deleteParent(int id){
        repository.deleteById(id);
    }
}
