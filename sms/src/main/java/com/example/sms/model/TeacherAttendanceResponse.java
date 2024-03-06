package com.example.sms.model;

import java.util.HashSet;

public class TeacherAttendanceResponse {

    private String schoolClass;
    private HashSet<AttendanceResponse> attendanceResponses;

    public String getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(String schoolClass) {
        this.schoolClass = schoolClass;
    }

    public HashSet<AttendanceResponse> getAttendanceResponses() {
        return attendanceResponses;
    }

    public void setAttendanceResponses(HashSet<AttendanceResponse> attendanceResponses) {
        this.attendanceResponses = attendanceResponses;
    }

    

}
