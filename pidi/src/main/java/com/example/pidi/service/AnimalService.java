package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {
    List<Animal> findAll();

    List<Animal> getAnimalsForAdoption();

    Animal save(Animal animal);

    Optional<Animal> findById(long id) throws ResourceNotFoundException;

    Optional<Animal> update(long id, Animal animalDetails) throws ResourceNotFoundException;

    void delete(long id);

    void clearTable();
}
