package com.example.pidi.model;

import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name = "medical_diagnoses")
public class MedicalDiagnose {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "medical_diagnoses_id")
    private long id;
    private Date dateOfTreatment;
    private double weight;
    private double height;
    private String treatment;
    @ManyToOne
    @JoinColumn(name="medicalHistory_id")
    private MedicalHistory medicalHistory;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getDateOfTreatment() {
        return dateOfTreatment;
    }

    public void setDateOfTreatment(Date dateOfTreatment) {
        this.dateOfTreatment = dateOfTreatment;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public String getTreatment() {
        return treatment;
    }

    public void setTreatment(String treatment) {
        this.treatment = treatment;
    }
}
