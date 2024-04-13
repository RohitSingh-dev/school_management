package com.example.sms.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Marks{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int marks_obtained;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    public Marks() {
    }

    public Marks(int marks_obtained) {
        this.marks_obtained = marks_obtained;
    }

    

    public Marks(int marks_obtained, Subject subject) {
        this.marks_obtained = marks_obtained;
        this.subject = subject;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMarks_obtained() {
        return marks_obtained;
    }

    public void setMarks_obtained(int marks_obtained) {
        this.marks_obtained = marks_obtained;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
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
        Marks other = (Marks) obj;
        if (id != other.id)
            return false;
        return true;
    }  
    
}
