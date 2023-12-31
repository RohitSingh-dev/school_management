package com.example.sms.model;

public enum UserType {
    
    STUDENT,PARENT,TEACHER,ADMIN;

    public UserType getUserType(String name){
        switch (name) {
            case "STUDENT":
                return UserType.STUDENT;

            case "PARENT":
                return UserType.PARENT;

            case "TEACHER":
                return UserType.TEACHER;
        
            default:
                return UserType.ADMIN;
        }
    }
}
