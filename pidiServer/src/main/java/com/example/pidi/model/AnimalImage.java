package com.example.pidi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AnimalImage {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String type;
    private Long imageSize;
    private String filePath;
}
