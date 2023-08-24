package com.example.pidi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
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
