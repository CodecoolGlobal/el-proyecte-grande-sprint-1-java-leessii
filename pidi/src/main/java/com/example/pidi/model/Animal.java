package com.example.pidi.model;


import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table (name = "animals")
public class Animal {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name = "animal_id")
    private long id;
    private String name;
    private int age;
    private  String species;
    private boolean openForAdoption;
    @ManyToOne
    @JoinColumn(name = "adoption_status_id")
    private AdoptionStatus adoptionStatus;
    private Date admissonDate;
    private String img;
    @OneToOne
    @JoinColumn(name = "medical_history_id")
    private MedicalHistory medicalHistory;

    /*
    public Animal() {
        adoptionStatus.getStatus().equals("Active") ? this.openForAdoption = true : this.openForAdoption = false;
    }
     */

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public boolean isOpenForAdoption() {
        return openForAdoption;
    }

    public void setOpenForAdoption(boolean openForAdoption) {
        this.openForAdoption = openForAdoption;
    }

    public AdoptionStatus getAdoptionStatus() {
        return adoptionStatus;
    }

    public void setAdoptionStatus(AdoptionStatus adoptionStatus) {
        this.adoptionStatus = adoptionStatus;
    }

    public Date getAdmissonDate() {
        return admissonDate;
    }

    public void setAdmissonDate(Date admissonDate) {
        this.admissonDate = admissonDate;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
