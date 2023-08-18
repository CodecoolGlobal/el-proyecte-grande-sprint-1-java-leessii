package com.example.pidi.service;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.repository.AnimalRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AnimalServiceImpl implements AnimalService {

    private final AnimalRepository animalRepository;

    public AnimalServiceImpl(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
    }

    @Override
    public List<Animal> getAllAnimals() {
        return animalRepository.findAll();
    }

    @Override
    public List<Animal> getAnimalsForAdoption() {
        List<Animal> animals = animalRepository.findAll();
        List<Animal> animalsForAdoption = animals.stream()
                .filter(animal -> animal.isOpenForAdoption())
                .collect(Collectors.toList());

        return animalsForAdoption;
    }

    @Override
    public Animal createAnimal(Animal animal) {
        return animalRepository.save(animal);
    }

    @Override
    public ResponseEntity<Animal> getAnimalById(Long id) throws ResourceNotFoundException {
        Animal animal = animalRepository.findById(id)
                .orElseThrow(ResourceNotFoundException::new);

        return ResponseEntity.ok(animal);
    }

    @Override
    public ResponseEntity<Animal> updateAnimal(Long id, Animal animalDetails) throws ResourceNotFoundException {
        Animal animal;
        animal = animalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException());

        animal.setName(animalDetails.getName());
        animal.setAge(animalDetails.getAge());
        animal.setSpecies(animalDetails.getSpecies());

        Animal updatedAnimal = animalRepository.save(animal);
        return ResponseEntity.ok(updatedAnimal);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteAnimal(Long id) throws ResourceNotFoundException {
        Animal animal = animalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException());

        animalRepository.delete(animal);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> clearTableAnimals() {
        animalRepository.deleteAll();
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
