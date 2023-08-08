package com.example.pidi.controller;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.service.RescueCenterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/animals")
public class RescueCenterController {


    private final RescueCenterService rescueService;

    public RescueCenterController(RescueCenterService rescueService) {
        this.rescueService = rescueService;
    }

    @GetMapping
    public List<Animal> getAllAnimals() {
        return rescueService.getAllAnimals();
    }

    @PostMapping
    public Animal createAnimal(@RequestBody Animal animal) {
        return rescueService.createAnimal(animal);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Animal> getAnimalById(@PathVariable Long id) throws ResourceNotFoundException {
        return rescueService.getAnimalById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Animal> updateAnimal(@PathVariable Long id, @RequestBody Animal animalDetails) throws ResourceNotFoundException {
        return rescueService.updateAnimal(id, animalDetails);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAnimal(@PathVariable Long id) throws ResourceNotFoundException {
        return rescueService.deleteAnimal(id);
    }

    @DeleteMapping
    public ResponseEntity<Map<String, Boolean>> clearDataBase() {
        return rescueService.clearDataBase();
    }

}
