package com.example.pidi.controller;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.model.MedicalDiagnose;
import com.example.pidi.service.AnimalService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
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
    @PutMapping
    public Animal updateAnimal(@RequestBody Animal animalDetails) throws ResourceNotFoundException {
        return animalService.save(animalDetails);
    }
    @PostMapping("/{id}/diagnoses")
    public Animal addMedicalDiagnose(@PathVariable long animalId, @RequestBody MedicalDiagnose medicalDiagnose){
        return animalService.addMedicalDiagnose(animalId, medicalDiagnose);
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
