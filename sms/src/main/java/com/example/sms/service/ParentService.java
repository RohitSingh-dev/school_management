package com.example.sms.service;

import java.io.IOException;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Parent;
import com.example.sms.model.ParentResponse;
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

    public ParentResponse getParent(int id){
        Parent parent= repository.findById(id).get();
        validateLoggedInUser(parent);
        ParentResponse parentResponse = new ParentResponse();
        parentResponse.setName(parent.getName());
        parentResponse.setAddress(parent.getAddress());
        parentResponse.setContact_info(parent.getContact_info());
        parentResponse.setEmailId(parent.getEmailId());
        parentResponse.setPic(parent.getPic());
        return parentResponse;
    }

    public Parent updateParent(Parent parent){
        validateLoggedInUser(parent);
        Parent existingParent= repository.findById(parent.getId()).get();
        existingParent.setName(parent.getName());
        existingParent.setAddress(parent.getAddress());
        existingParent.setEmailId(parent.getEmailId());
        existingParent.setContact_info(parent.getContact_info());
        existingParent.setPassword(passwordEncoder.encode(parent.getPassword()));
        repository.save(existingParent);
        return existingParent;
    }

    public String changePicture(MultipartFile image, int id) throws IOException{
        Parent existingtParent= repository.findById(id).get();
        existingtParent.setPic(new String(Base64.getEncoder().encode(image.getBytes())));
        repository.save(existingtParent);
        return "Picture uploaded successfully";
    }

    public void deleteParent(int id){
        validateLoggedInUser(repository.findById(id).get());
        repository.deleteById(id);
    }

    public void validateLoggedInUser(Parent parent){
        UserDetails userDetails= (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Parent loggedInParent = repository.findByEmailId(userDetails.getUsername());
        if(loggedInParent.getId()!= parent.getId()){
            throw new RuntimeException("Invalid User");
        }
    }

}
