package com.example.pidi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
@Entity
@Data
public class MedicalDiagnose {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private LocalDateTime dateOfTreatment;
    private double weight;
    private double height;
    private String treatment;
}
