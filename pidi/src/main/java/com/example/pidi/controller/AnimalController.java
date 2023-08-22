package com.example.pidi.controller;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.service.AnimalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return animalService.findAll();
    }
    @GetMapping("/adoption")
    public List<Animal> getAnimalsForAdoption() {
        return animalService.getAnimalsForAdoption();
    }
    @PostMapping
    public Animal createAnimal(@RequestBody Animal animal) {
        return animalService.save(animal);
    }
    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) throws ResourceNotFoundException {
        return animalService.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
    }
    @PutMapping("/{id}")
    public Animal updateAnimal(@PathVariable Long id, @RequestBody Animal animalDetails) throws ResourceNotFoundException {
        return animalService.update(id, animalDetails)
                .orElseThrow(ResourceNotFoundException::new);
    }
    @DeleteMapping("/{id}")
    public void deleteAnimal(@PathVariable Long id) {
        animalService.delete(id);
    }
    @DeleteMapping
    public void clearDataBase() {
        animalService.clearTable();

    }

}
