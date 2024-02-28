package com.example.sms.entity;

import java.util.HashSet;
import java.util.Set;

// import javax.validation.constraints.Max;
// import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Parent {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // @NotBlank(message = "Name cannot be blank")
    private String name;
    private String address;
    @Email(message = "Enter correct Email")
    @Column(name = "email_id")
    private String emailId;
    // @Min(10)
    // @Max(10)
    private int contact_info;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL)
    private Set<Student> students= new HashSet<>();

    public Parent() {
    }

    public Parent(@NotBlank String name, String email_id, int contact_info) {
        this.name = name;
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

    public Set<Student> getStudents() {
        return students;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
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
        Parent other = (Parent) obj;
        if (id != other.id)
            return false;
        return true;
    }
    
}
