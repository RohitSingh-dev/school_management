package com.example.sms.model;

import java.sql.Date;

public class TeacherResponse {

    private String name;
    private String address;
    private String emailId;
    private int contact_info;
    private Date date_of_birth;
    private Date date_of_joining;
    private Date date_of_exit;
    private String pic;

    public Date getDate_of_exit() {
        return date_of_exit;
    }

    public void setDate_of_exit(Date date_of_exit) {
        this.date_of_exit = date_of_exit;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public int getContact_info() {
        return contact_info;
    }

    public void setContact_info(int contact_info) {
        this.contact_info = contact_info;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public Date getDate_of_joining() {
        return date_of_joining;
    }

    public void setDate_of_joining(Date date_of_joining) {
        this.date_of_joining = date_of_joining;
    }

}
