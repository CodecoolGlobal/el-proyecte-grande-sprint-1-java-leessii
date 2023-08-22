package com.example.pidi.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table
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
    private LocalDateTime admissionDate;
    private String img;
    @OneToMany(cascade = CascadeType.ALL)
    private List<MedicalDiagnose> medicalDiagnose;
}
