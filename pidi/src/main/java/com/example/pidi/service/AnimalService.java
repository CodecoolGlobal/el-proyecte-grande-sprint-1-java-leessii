package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface AnimalService {
    List<Animal> getAllAnimals();
    List<Animal> getAnimalsForAdoption();
    Animal createAnimal(Animal animal);
    ResponseEntity<Animal> getAnimalById(Long id) throws ResourceNotFoundException;
    ResponseEntity<Animal> updateAnimal(Long id, Animal animalDetails) throws ResourceNotFoundException;
    ResponseEntity<Map<String, Boolean>> deleteAnimal(Long id) throws ResourceNotFoundException;
    ResponseEntity<Map<String, Boolean>> clearTableAnimals();
}
