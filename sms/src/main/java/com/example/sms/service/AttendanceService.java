package com.example.sms.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.Attendance;
import com.example.sms.entity.SchoolClass;
import com.example.sms.entity.Student;
import com.example.sms.model.AttendanceResponse;
import com.example.sms.model.AttendanceStatusResponse;
import com.example.sms.model.TeacherAttendanceResponse;
import com.example.sms.repository.AttendanceRepository;
import com.example.sms.repository.SchoolClassRepository;
import com.example.sms.repository.StudentRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

@Service
@SuppressWarnings("null")
public class AttendanceService {
    
    @Autowired
    private AttendanceRepository repository;

    @Autowired
    private SchoolClassRepository schoolClassRepository;

    @Autowired
    private StudentRepository studentRepository;

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
        List<Attendance> attendances= repository.findByStudent_SchoolClass_Id(id);
        TeacherAttendanceResponse teacherAttendanceResponse = new TeacherAttendanceResponse();
        teacherAttendanceResponse.setSchoolClass(attendances.get(0).getStudent().getSchoolClass().getClass_name());
        HashSet<AttendanceResponse> attendanceResponses= new HashSet<>();
        for(Attendance attendance : attendances){
            AttendanceResponse attendanceResponse = new AttendanceResponse(attendance.getStudent().getId(), attendance.getStudent().getName());
            attendanceResponses.add(attendanceResponse);
        }
        teacherAttendanceResponse.setAttendanceResponses(attendanceResponses);
        return teacherAttendanceResponse;
    }

    @SuppressWarnings("resource")
    public String bulkupload(MultipartFile file) throws FileNotFoundException, IOException, CsvValidationException {
        String filename= "attendance_"+ UUID.randomUUID().toString()+ ".csv";
        File file2 = new File(filename);
        Files.write(file2.toPath(), file.getBytes());
        CSVReader csvReader= new CSVReader(new FileReader(filename));
        String[] row;
        Date date;
        boolean present;
        int student_id;
        try{
            while ((row=csvReader.readNext())!= null) {
                date= Date.valueOf(row[0]);
                present=Boolean.parseBoolean(row[1]);
                student_id= Integer.parseInt(row[2]);
                Student student= this.studentRepository.findById(student_id).get();
                Attendance attendance= new Attendance(date, present, student);
                repository.save(attendance);
            }
        }catch(Exception e){
            System.out.println(e.getMessage());
            throw e;
        }
        return "Attendance Uploaded Successfully";
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
