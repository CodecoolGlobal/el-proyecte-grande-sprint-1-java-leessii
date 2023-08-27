package com.example.pidi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;
@Entity
@Data
public class MedicalDiagnose {
    @Id
    @GeneratedValue
    private long id;
    private Date dateOfTreatment;
    private double weight;
    private double height;
    private String treatment;
}
