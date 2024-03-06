package com.example.sms.service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.Attendance;
import com.example.sms.entity.SchoolClass;
import com.example.sms.model.AttendanceResponse;
import com.example.sms.model.AttendanceStatusResponse;
import com.example.sms.model.TeacherAttendanceResponse;
import com.example.sms.repository.AttendanceRepository;
import com.example.sms.repository.SchoolClassRepository;

@Service
@SuppressWarnings("null")
public class AttendanceService {
    
    @Autowired
    private AttendanceRepository repository;

    @Autowired
    private SchoolClassRepository schoolClassRepository;

    public String createAttendance(Attendance attendance){
        repository.save(attendance);
        return "Attendance recorded successfully";
    }

    public AttendanceResponse getAttendanceByStudent(int id) {
        List<Attendance> attendances= repository.findByStudent_Id(id);
        AttendanceResponse attendanceResponse= new AttendanceResponse();
        attendanceResponse.setName(attendances.get(0).getStudent().getName());
        attendanceResponse.setParent_name(attendances.get(0).getStudent().getParent().getName());
        attendanceResponse.setSchoolClass(attendances.get(0).getStudent().getSchoolClass().getClass_name());
        attendanceResponse.setRoll_no(attendances.get(0).getStudent().getRoll_no());
        attendanceResponse.setAttendanceStatusResponses(attendances.stream().map(attendance-> new AttendanceStatusResponse(attendance)).toList());
        return attendanceResponse;
    }

    public Attendance updateAttendance(Attendance attendance){
        Attendance existingAttendence= repository.findById(attendance.getId()).get();
        existingAttendence.setDate(attendance.getDate());
        existingAttendence.setPresent(attendance.isPresent());
        return existingAttendence;
    }

    public String deleteAttendance(int id){
        repository.deleteById(id);
        return "Attendance deleted successfully";
    }

    public TeacherAttendanceResponse getAttendanceByClass(int id, int auth){
        //String str= new String(Base64.decode(auth.substring(6).getBytes()));
        //String username= str.substring(0,str.indexOf(":"));
        //Teacher teacher= teacherRepository.findByEmailId(username);
        SchoolClass schoolClass= schoolClassRepository.findById(id).get();
        if(auth!=schoolClass.getTeacher().getId()){
            throw new RuntimeException("Only Class Teacher can fetch the attendane of this class");
        }
        TeacherAttendanceResponse teacherAttendanceResponse = new TeacherAttendanceResponse();
        teacherAttendanceResponse.setSchoolClass(schoolClass.getClass_name());
        List<AttendanceResponse> attendanceResponses= new ArrayList<>();

        return teacherAttendanceResponse;
    }

    public List<Attendance> getAttendanceByDate(Date date){
        List<Attendance> attendances = (List<Attendance>) repository.findAll();
        List<Attendance> attendanceByDate= new ArrayList<>();
        for(Attendance attendance : attendances){
            if(attendance.getDate()==date){
                attendanceByDate.add(attendance);
            }
        }
        return attendanceByDate;        
    }
}
