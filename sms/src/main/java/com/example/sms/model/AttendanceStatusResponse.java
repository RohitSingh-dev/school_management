package com.example.sms.model;

import java.sql.Date;

import com.example.sms.entity.Attendance;

public class AttendanceStatusResponse {
    
    private Date date;
    private boolean present;

    public AttendanceStatusResponse(Attendance attendance) {
        this.date = attendance.getDate();
        this.present = attendance.isPresent();
    }
    

    public AttendanceStatusResponse() {
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public boolean isPresent() {
        return present;
    }

    public void setPresent(boolean present) {
        this.present = present;
    }
}
