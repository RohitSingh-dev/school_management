package com.example.sms.model;

import java.util.List;

public class AttendanceResponse {

    private int id;
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        AttendanceResponse other = (AttendanceResponse) obj;
        if (id != other.id)
            return false;
        return true;
    }

    public AttendanceResponse() {
    }

    public AttendanceResponse(int id, String name) {
        this.id = id;
        this.name = name;
    }



}
