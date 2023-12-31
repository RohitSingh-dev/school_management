package com.example.sms.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.sms.entity.Attendance;

@Repository
public interface AttendanceRepository extends CrudRepository<Attendance,Integer>{
    
    public List<Attendance> findByStudent_Id(int id);

    public List<Attendance> findByStudent_SchoolClass_Id(int id);
}
