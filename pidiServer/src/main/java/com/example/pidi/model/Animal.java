package com.example.pidi.model;

import com.example.pidi.controller.validator.AnimalAgeConstraint;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Animal {

    @Id
    @GeneratedValue
    private long id;

    @Valid
    // TODO: test validation

    @NotNull(message = "Name is mandatory")
    @NotBlank(message = "Name is mandatory")
    private String name;

    @AnimalAgeConstraint
    // TODO: make the constraint work
    private int age;

    @NotNull(message = "Species is mandatory")
    @NotBlank(message = "Species is mandatory")
    private  String species;

    private boolean openForAdoption;

    @ManyToOne
    @NotNull(message = "Adoption status is mandatory")
    //TODO: validate that the object contains id and status
    private AdoptionStatus adoptionStatus;

    @NotNull(message = "Admission date is mandatory")
    //@JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate admissionDate;

    @OneToOne(cascade = CascadeType.ALL)
    private AnimalImage animalImage;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MedicalDiagnose> medicalDiagnose;
}
