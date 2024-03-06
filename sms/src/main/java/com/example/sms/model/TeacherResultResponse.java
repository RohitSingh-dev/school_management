package com.example.sms.model;

import java.util.List;

public class TeacherResultResponse {

    private String schoolClass;
    private List<ResultResponse> resultResponses;

    public TeacherResultResponse() {
    }

    public String getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(String schoolClass) {
        this.schoolClass = schoolClass;
    }

    public List<ResultResponse> getResultResponses() {
        return resultResponses;
    }

    public void setResultResponses(List<ResultResponse> resultResponses) {
        this.resultResponses = resultResponses;
    }

}
