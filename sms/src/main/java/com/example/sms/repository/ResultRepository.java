package com.example.sms.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Result;

@Repository
public interface ResultRepository extends CrudRepository<Result,Integer>{
    
    public List<Result> findByStudent_name(String name);

    public List<Result> findByYear(int year);

    public List<Result> findByStudent_SchoolClass_Id(int id);
}
