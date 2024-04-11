package com.example.sms.entity;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

// import javax.validation.constraints.Max;

// import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // @NotBlank(message = "Name cannot be Blank")
    private String name;
    private String address;
    @Email(message = "Enter a correct Email")
    @Column(name = "email_id")
    private String emailId;
    // @Min(10)
    // @Max(10)
    private int contact_info;
    // @NotNull(message = "DOB cannot be null")
    private Date date_of_birth;
    @NotNull(message = "Date of Joinning cannot be null")
    private Date date_of_joining;
    private Date date_of_exit;
    @Column(length = 100000)
    private String pic;
    private String password;

    @JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinTable(name = "teacher_subjects", joinColumns = @JoinColumn(name = "teacher_id"), inverseJoinColumns = @JoinColumn(name = "subjects_id"))
    private List<Subject> subjects = new ArrayList<>();

    public Teacher() {
    }

    public Teacher(@NotBlank String name, String address, String email_id, int contact_info) {
        this.name = name;
        this.address = address;
        this.emailId = email_id;
        this.contact_info = contact_info;
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

    public Date getDate_of_joining() {
        return date_of_joining;
    }

    public void setDate_of_joining(Date date_of_joining) {
        this.date_of_joining = date_of_joining;
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

    public List<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<Subject> subjects) {
        this.subjects = subjects;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
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
        Teacher other = (Teacher) obj;
        if (id != other.id)
            return false;
        return true;
    }

}
