package com.example.sms.entity;


import java.sql.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    // @NotBlank(message = "Name cannot be null")
    private String name;
    private int roll_no;
    private String address;
    @Email(message = "Enter correct Email")
    private String emailId;
    // @Min(10)
    // @Max(10)
    private int contact_info;
    // @NotNull(message = "DOB cannot be null")
    private Date date_of_birth;
    @NotNull(message = "Date of registration cannot be null")
    private Date date_of_reg;
    private Date date_of_exit;
    private String password;
    @Lob
    @Column(length = 10000)
    private byte[] pic;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Parent parent;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schoolClass_id")
    private SchoolClass schoolClass;

    public Student() {
    }

    public Student(@NotBlank String name, int roll_no, String address, String email_id, int contact_info) {
        this.name = name;
        this.roll_no = roll_no;
        this.address = address;
        this.emailId = email_id;
        this.contact_info = contact_info;
    }
    

    
    public Student(@NotBlank(message = "Name cannot be null") String name, int roll_no, String address,
            @Email String email_id, @Min(10) @Max(10) int contact_info, Date date_of_birth, Date date_of_reg,
            Date date_of_exit, String password, Parent parent, SchoolClass schoolClass) {
        this.name = name;
        this.roll_no = roll_no;
        this.address = address;
        this.emailId = email_id;
        this.contact_info = contact_info;
        this.date_of_birth = date_of_birth;
        this.date_of_reg = date_of_reg;
        this.date_of_exit = date_of_exit;
        this.password = password;
        this.parent = parent;
        this.schoolClass = schoolClass;
    }

    public SchoolClass getSchoolClass() {
        return schoolClass;
    }

    public void setSchoolClass(SchoolClass schoolClass) {
        this.schoolClass = schoolClass;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(int roll_no) {
        this.roll_no = roll_no;
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

    public void setEmailId(String email_id) {
        this.emailId = email_id;
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

    public Date getDate_of_exit() {
        return date_of_exit;
    }

    public void setDate_of_exit(Date date_of_exit) {
        this.date_of_exit = date_of_exit;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Parent getParent() {
        return parent;
    }

    public void setParent(Parent parent) {
        this.parent = parent;
    }

    public byte[] getPic() {
        return pic;
    }

    public void setPic(byte[] pic) {
        this.pic = pic;
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
        Student other = (Student) obj;
        if (id != other.id)
            return false;
        return true;
    }

}


