package com.example.pidi.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "medical_history")
public class MedicalHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "medical_history_id")
    private long id;
    @OneToOne(mappedBy = "medicalHistory")
    private Animal animal;
    @OneToMany(mappedBy = "medicalHistory")
    private List<MedicalDiagnose> medicalDiagnose;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<MedicalDiagnose> getMedicalDiagnoses() {
        return medicalDiagnose;
    }

    public void setMedicalDiagnoses(List<MedicalDiagnose> medicalDiagnose) {
        this.medicalDiagnose = medicalDiagnose;
    }
}
