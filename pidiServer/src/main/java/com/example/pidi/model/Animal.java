package com.example.pidi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Animal {
    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private long id;
    private String name;
    private int age;
    private  String species;
    private boolean openForAdoption;
    @ManyToOne
    private AdoptionStatus adoptionStatus;
    private String admissionDate;
    private String img;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MedicalDiagnose> medicalDiagnose;
}
