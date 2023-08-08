package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface RescueCenterService {
    public List<Animal> getAllAnimals();
    public Animal createAnimal(Animal animal);
    public ResponseEntity<Animal> getAnimalById(Long id) throws ResourceNotFoundException;
    public ResponseEntity<Animal> updateAnimal(Long id, Animal animalDetails) throws ResourceNotFoundException;
    public ResponseEntity<Map<String, Boolean>> deleteAnimal(Long id) throws ResourceNotFoundException;
    public ResponseEntity<Map<String, Boolean>> clearDataBase();

}
