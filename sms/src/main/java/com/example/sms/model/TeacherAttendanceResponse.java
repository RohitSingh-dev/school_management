package com.example.sms.model;

import java.util.List;

public class TeacherAttendanceResponse {

    private String schoolClass;
    private List<AttendanceResponse> attendanceResponses;

    public String getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(String schoolClass) {
        this.schoolClass = schoolClass;
    }

    public List<AttendanceResponse> getAttendanceResponses() {
        return attendanceResponses;
    }

    public void setAttendanceResponses(List<AttendanceResponse> attendanceResponses) {
        this.attendanceResponses = attendanceResponses;
    }

}
