package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.model.MedicalDiagnose;

import java.util.List;
import java.util.Optional;

public interface AnimalService {
    List<Animal> findAll();

    List<Animal> getAnimalsForAdoption();

    Animal save(Animal animal);

    Optional<Animal> findById(long id) throws ResourceNotFoundException;

    void delete(long id);

    void clearTable();

    Animal addMedicalDiagnose(long animalId, MedicalDiagnose medicalDiagnose);
}
