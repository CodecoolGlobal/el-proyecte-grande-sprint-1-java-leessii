package com.example.pidi.controller;

import com.example.pidi.controller.exeption.ResourceNotFoundException;
import com.example.pidi.model.Animal;
import com.example.pidi.model.MedicalDiagnose;
import com.example.pidi.service.AnimalService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
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
        return animalService.findAll();
    }

    @GetMapping("/adoption")
    @Transactional
    public List<Animal> getAnimalsForAdoption() {
        return animalService.getAnimalsForAdoption();
    }

    @PostMapping(consumes = {
            MediaType.MULTIPART_FORM_DATA_VALUE,
            MediaType.APPLICATION_JSON_VALUE,
    })

    public Animal createAnimal(@Valid @RequestPart Animal animal,
                                @RequestPart(value = "animalImage", required = false) MultipartFile imageFile) throws IOException {
        System.out.println("WE REACHED THE BACKEND!!!!!!!!!!!!!!!!!!!!!----------------------------------------------");
        animalService.save(animal, imageFile);
        return animal;
    }

    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) throws ResourceNotFoundException {
        return animalService.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
    }

    @PostMapping("/{animalId}/diagnoses")
    public Animal addMedicalDiagnose(@PathVariable long animalId,
                                     @RequestBody MedicalDiagnose medicalDiagnose) {
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
