package com.example.pidi.controller;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.service.AnimalService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/animals")
public class AnimalController {
    private final AnimalService animalService;

    public AnimalController(AnimalService animalService) {
        this.animalService = animalService;
    }

    @GetMapping
    public List<Animal> getAllAnimals() {
        return animalService.getAllAnimals();
    }

    @GetMapping("/adoption")
    public List<Animal> getAnimalsForAdoption() {
        return animalService.getAnimalsForAdoption();
    }

    @PostMapping
    public Animal createAnimal(@RequestBody Animal animal) {
        return animalService.createAnimal(animal);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> getAnimalById(@PathVariable Long id) throws ResourceNotFoundException {
        return animalService.getAnimalById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Animal> updateAnimal(@PathVariable Long id, @RequestBody Animal animalDetails) throws ResourceNotFoundException {
        return animalService.updateAnimal(id, animalDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAnimal(@PathVariable Long id) throws ResourceNotFoundException {
        return animalService.deleteAnimal(id);
    }

    @DeleteMapping
    public ResponseEntity<Map<String, Boolean>> clearDataBase() {
        return animalService.clearTableAnimals();
    }

}
