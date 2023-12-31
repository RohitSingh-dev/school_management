package com.example.sms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sms.entity.Marks;
import com.example.sms.entity.Result;
import com.example.sms.repository.ResultRepository;

@Service
public class ResultService {
    
    @Autowired
    private ResultRepository repository;
    
    public void createResult(Result result){
        int total=0;
        for(Marks marks : result.getMarks()){
            total= total+ marks.getMarks_obtained();
        }
        result.setTotal_marks(total);
        repository.save(result);
    }

    public Result getResult(int id){
        return repository.findById(id).get();
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

    public List<Result> getResultsByClass(int class_id){
        List<Result> results= (List<Result>) repository.findAll();
        List<Result> resultsByClass = new ArrayList<>();
        for(Result result : results){
            if(result.getStudent().getSchoolClass().getId() == class_id){
                resultsByClass.add(result);
            }
        }
        return resultsByClass;
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
