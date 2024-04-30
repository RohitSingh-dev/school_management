package com.example.sms.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringWriter;
import java.nio.file.Files;
import java.sql.Date;
import java.util.Base64;
// import java.util.Base64;
import java.util.List;
import java.util.UUID;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.LoginInfo;
import com.example.sms.entity.Parent;
import com.example.sms.entity.SchoolClass;
import com.example.sms.entity.Student;
import com.example.sms.model.StudentResponse;
import com.example.sms.model.UserType;
import com.example.sms.repository.LoginInfoRepository;
import com.example.sms.repository.ParentRepository;
import com.example.sms.repository.SchoolClassRepository;
import com.example.sms.repository.StudentRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;


@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    @Autowired
    private ParentRepository parent_Repository;

    @Autowired
    private SchoolClassRepository schoolClass_Repository;

    @Autowired
    private LoginInfoRepository loginInfoRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public void createStudent(Student student){
        List<Parent> parents= (List<Parent>) parent_Repository.findAll();
        for(Parent parent: parents){
            if(student.getParent().getEmailId().equals(parent.getEmailId())){
                student.setParent(parent);
            }
        }
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        student.getParent().setPassword(passwordEncoder.encode(student.getParent().getPassword()));
        LoginInfo loginInfo= new LoginInfo(student.getEmailId(), student.getPassword(), UserType.STUDENT);
        loginInfoRepository.save(loginInfo);
        repository.save(student);
    }

    public StudentResponse getStudent(int id){
        Student student=  repository.findById(id).get();
        validateLoggedInUser(student);
        StudentResponse studentResponse= new StudentResponse();
        studentResponse.setName(student.getName());
        studentResponse.setEmailId(student.getEmailId());
        studentResponse.setAddress(student.getAddress());
        studentResponse.setContact_info(student.getContact_info());
        studentResponse.setDate_of_birth(student.getDate_of_birth());
        studentResponse.setDate_of_reg(student.getDate_of_reg());
        studentResponse.setParent_emailId(student.getParent()!=null ? student.getParent().getEmailId(): null);
        studentResponse.setPic(student.getPic());
        return studentResponse;
    }

    public Student updateStudent(Student student){
        validateLoggedInUser(student);
        Student existingStudent= repository.findByEmailId(student.getEmailId());
        Parent existingParent= parent_Repository.findByEmailId(student.getParent().getEmailId());
        existingStudent.setName(student.getName());
        existingStudent.setAddress(student.getAddress());
        existingStudent.setEmailId(student.getEmailId());
        existingStudent.setContact_info(student.getContact_info());
        existingStudent.setDate_of_birth(student.getDate_of_birth());
        existingStudent.setParent(existingParent);
        repository.save(existingStudent);
        return existingStudent;
    }

    public void deleteStudent(int id){
        validateLoggedInUser(repository.findById(id).get());
        repository.deleteById(id);
    }

    public List<Student> getAllStudent() {
        return (List<Student>) repository.findAll();
    }

    public List<Student> getAllStudentsByClass(int id){
        return repository.findBySchoolClass_Id(id);
    }

    public List<Student> getAllStudentsByParent(int id){
        return repository.findByParent_Id(id);
    }

    public String changePicture(MultipartFile image, int id) throws IOException{
        Student existingStudent= repository.findById(id).get();
        existingStudent.setPic(new String(Base64.getEncoder().encode(image.getBytes())));
        repository.save(existingStudent);
        return "Picture uploaded successfully";
    }

    @SuppressWarnings("resource")
    public String bulkupload(MultipartFile file) throws FileNotFoundException, IOException, CsvValidationException {
        String filename= "student_"+ UUID.randomUUID().toString()+ ".csv";
        File file2 = new File(filename);
        Files.write(file2.toPath(), file.getBytes());
        CSVReader csvReader= new CSVReader(new FileReader(filename));
        String[] row;
        String name;
        int roll_no;
        String address;
        String email_id;
        int contact_info;
        Date date_of_birth;
        Date date_of_reg;
        Date date_of_exit;
        String password;
        int parent;
        int schoolClass;
        while ((row=csvReader.readNext())!= null) {
            name=row[6];
            roll_no=Integer.parseInt(row[8]);
            address= row[0];
            email_id= row[5];
            contact_info= Integer.parseInt(row[1]);
            date_of_birth= Date.valueOf(row[2]);
            date_of_reg= Date.valueOf(row[3]);
            date_of_exit= Date.valueOf(row[4]);
            password=row[7];
            parent=Integer.parseInt(row[9]);
            schoolClass=Integer.parseInt(row[10]);
            Parent parent2= this.parent_Repository.findById(parent).get();
            SchoolClass schoolClass2= this.schoolClass_Repository.findById(schoolClass).get();
            Student student= new Student(name, roll_no, address, email_id, contact_info, date_of_birth, date_of_reg, date_of_exit, password, parent2, schoolClass2);
            repository.save(student);
        }
        return "Students added";
    }

    public String writeStudentsToCsv() throws IOException{
        List<Student> students= (List<Student>) repository.findAll();
        StringWriter writer2= new StringWriter();
        CSVPrinter csvPrinter= new CSVPrinter(writer2, CSVFormat.DEFAULT);
        csvPrinter.printRecord("ID", "ADDRESS", "NAME", "EMAIL_ID");
        for(Student student : students){
            csvPrinter.printRecord(student.getId(), student.getAddress(), student.getName(), student.getEmailId());
        }
        csvPrinter.close();
        return writer2.toString();
    }

    // public byte[] getPic(int id){
    //     Student student= repository.findById(id).get();
    //     byte[] base64encodedData= Base64.getEncoder().encode(student.getPic());
    //     return base64encodedData;
    // }

    public void validateLoggedInUser(Student student){
        UserDetails userDetails= (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Student loggedInStudent = repository.findByEmailId(userDetails.getUsername());
        if(!loggedInStudent.getEmailId().equals(student.getEmailId())){
            throw new RuntimeException("Invalid User");
        }
    }

// public static void main(String[] args) {
//     String password= "abc123";
//     String encodedPassword= new BCryptPasswordEncoder().encode(password);
//     System.out.println(encodedPassword);
//     String base64encoded= Base64.getEncoder().encodeToString(password.getBytes());
//     System.out.println(base64encoded);
// }
}



// {
//     "name": "Rishav",
//     
//     "address": "Patna",
//     "emailId": "rishav@gmail.com",
//     "contact_info": 9876543210,
//     "date_of_birth": "2002-05-15",
//     "date_of_reg": "2007-04-01",
//     
//     
//     "parent": {
//        "emailId": "parent@gmail.com",
//        
//    }
// }