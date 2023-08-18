package com.example.pidi.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "adoption_status")
public class AdoptionStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "adoption_status_id")
    private Long id;
    private String status;
    @OneToMany(mappedBy = "adoptionStatus")
    private List<Animal> animals;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}
