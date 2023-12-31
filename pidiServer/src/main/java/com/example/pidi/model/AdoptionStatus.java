package com.example.pidi.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class AdoptionStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String status;
}
