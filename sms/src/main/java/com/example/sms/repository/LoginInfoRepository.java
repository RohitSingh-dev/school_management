package com.example.sms.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.LoginInfo;

@Repository
public interface LoginInfoRepository extends CrudRepository<LoginInfo, Integer>{
    
    public LoginInfo findByUsername(String username);
}
