package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.model.MedicalDiagnose;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface AnimalService {
    List<Animal> findAll();

    List<Animal> getAnimalsForAdoption();

    // todo mentor review 2023-0918 use inputstream or byte array instead of multipart file
    Animal save(Animal animal, MultipartFile imageFile) throws IOException;

    Optional<Animal> findById(long id) throws ResourceNotFoundException;

    void delete(long id);

    void clearTable();

    Animal addMedicalDiagnose(long animalId, MedicalDiagnose medicalDiagnose);

    void deleteAnimalImage(long imageId);

    Animal getJson(String animal, MultipartFile imageFile);
}
