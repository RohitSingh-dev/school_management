package com.example.sms.model;

import java.util.List;

import com.example.sms.entity.Student;

public class CreateParentRequest {

    private String parent_name;
    private String parent_email;
    private List<Student> students;
    public String getParent_name() {
        return parent_name;
    }
    public void setParent_name(String parent_name) {
        this.parent_name = parent_name;
    }
    public String getParent_email() {
        return parent_email;
    }
    public void setParent_email(String parent_email) {
        this.parent_email = parent_email;
    }
    public List<Student> getStudents() {
        return students;
    }
    public void setStudents(List<Student> students) {
        this.students = students;
    }
    public CreateParentRequest(String parent_name, String parent_email) {
        this.parent_name = parent_name;
        this.parent_email = parent_email;
    }

    
    
}
