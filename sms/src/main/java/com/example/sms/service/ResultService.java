package com.example.sms.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.sms.entity.Marks;
import com.example.sms.entity.Result;
import com.example.sms.entity.Student;
import com.example.sms.entity.Subject;
import com.example.sms.model.ResultResponse;
import com.example.sms.model.TeacherResultResponse;
import com.example.sms.repository.ResultRepository;
import com.example.sms.repository.StudentRepository;
import com.example.sms.repository.SubjectRepository;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;

@Service
public class ResultService {
    
    @Autowired
    private ResultRepository repository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private SubjectRepository subjectRepository;
    
    public void createResult(Result result){
        int total=0;
        for(Marks marks : result.getMarks()){
            total= total+ marks.getMarks_obtained();
        }
        result.setTotal_marks(total);
        repository.save(result);
    }

    public ResultResponse getResult(int id){
        Result result= repository.findById(id).get();
        ResultResponse resultResponse= new ResultResponse();
        resultResponse.setName(result.getStudent().getName());
        resultResponse.setParent_name(result.getStudent().getParent().getName());
        resultResponse.setAddress(result.getStudent().getAddress());
        resultResponse.setSchoolClass(result.getStudent().getSchoolClass().getClass_name());
        resultResponse.setRoll_no(result.getStudent().getRoll_no());
        resultResponse.setDate_of_birth(result.getStudent().getDate_of_birth());
        resultResponse.setMarks(result.getMarks());
        resultResponse.setTotal_marks(result.getTotal_marks());
        resultResponse.setPassed(result.isPassed());
        return resultResponse;
    }

    public Result updateResult(Result result){
        Result existingResult= repository.findById(result.getId()).get();
        existingResult.setPassed(result.isPassed());
        repository.save(existingResult);
        return existingResult;
    }

    public void deleteResult(int id){
        repository.deleteById(id);
    }

    public List<Result> getAllResult(){
        return (List<Result>) repository.findAll();
    }

    public TeacherResultResponse getResultsByClass(int class_id){
        List<Result> results= repository.findByStudent_SchoolClass_Id(class_id);
        TeacherResultResponse teacherResultResponse = new TeacherResultResponse();
        teacherResultResponse.setSchoolClass(results.get(0).getStudent().getSchoolClass().getClass_name());
        List<ResultResponse> resultResponses= new ArrayList<>();
        for(Result result : results){
            ResultResponse resultResponse= new ResultResponse(result.getStudent().getName(), result.isPassed());
            resultResponses.add(resultResponse);
        }
        teacherResultResponse.setResultResponses(resultResponses);
        return teacherResultResponse;
    }


    @SuppressWarnings("resource")
    public String bulkupload(MultipartFile file) throws FileNotFoundException, IOException, CsvValidationException {
        String filename= "result_"+ UUID.randomUUID().toString()+ ".csv";
        File file2 = new File(filename);
        Files.write(file2.toPath(), file.getBytes());
        CSVReader csvReader= new CSVReader(new FileReader(filename));
        String[] row;
        boolean passed;
        int year;
        int total_marks;
        int student_id;
        try{
            while ((row=csvReader.readNext())!= null) {
                passed= Boolean.parseBoolean(row[0]);
                year= Integer.parseInt(row[1]);
                total_marks= Integer.parseInt(row[4]);
                student_id= Integer.parseInt(row[5]);
                Student student= studentRepository.findById(student_id).get();
                List<Subject> subjects= (List<Subject>) subjectRepository.findAll();
                List<Marks> marksList= new ArrayList<>();
                int i=2;
                for(Subject subject : subjects){
                    Marks marks= new Marks(Integer.parseInt(row[i]), subject);
                    marksList.add(marks);
                    i++;
                }
                Result result= new Result(year, total_marks, passed, student, marksList);
                repository.save(result);
            }
        }catch(Exception e){
            System.out.println(e.getMessage());
            throw e;
        }
        return "Result Uploaded Successfully";
    }

    public List<Result> getResultsOfPassedStudents(){
        List<Result> results= (List<Result>) repository.findAll();
        List<Result> resultsOfPassedStudents = new ArrayList<>();
        for(Result result : results){
            if(result.isPassed()){
                resultsOfPassedStudents.add(result);
            }
        }
        return resultsOfPassedStudents;
    }

}
