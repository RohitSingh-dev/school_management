package com.example.sms.model;

import java.util.List;

public class AttendanceResponse {

    private String name;
    private String parent_name;
    private String schoolClass;
    private int roll_no;
    private List<AttendanceStatusResponse> attendanceStatusResponses;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getParent_name() {
        return parent_name;
    }

    public void setParent_name(String parent_name) {
        this.parent_name = parent_name;
    }

    public String getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(String schoolClass) {
        this.schoolClass = schoolClass;
    }

    public int getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(int roll_no) {
        this.roll_no = roll_no;
    }

    public List<AttendanceStatusResponse> getAttendanceStatusResponses() {
        return attendanceStatusResponses;
    }

    public void setAttendanceStatusResponses(List<AttendanceStatusResponse> attendanceStatusResponses) {
        this.attendanceStatusResponses = attendanceStatusResponses;
    }

}
