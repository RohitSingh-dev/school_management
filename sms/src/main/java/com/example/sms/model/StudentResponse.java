package com.example.sms.model;

import java.sql.Date;


public class StudentResponse {
    private String name;
    private String address;
    private String emailId;
    private int contact_info;
    private Date date_of_birth;
    private Date date_of_reg;
    private String parent_emailId;
    private String pic;

    

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
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

    public Date getDate_of_reg() {
        return date_of_reg;
    }

    public void setDate_of_reg(Date date_of_reg) {
        this.date_of_reg = date_of_reg;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getParent_emailId() {
        return parent_emailId;
    }

    public void setParent_emailId(String parent_emailId) {
        this.parent_emailId = parent_emailId;
    }

}
