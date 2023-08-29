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
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.MULTIPART_FORM_DATA_VALUE
    })
    public Animal createAnimal(@Valid @RequestPart String animal,
                                @RequestPart("animalImage") MultipartFile imageFile) throws IOException {
        Animal animalJson = animalService.getJson(animal, imageFile);
        animalService.save(animalJson, imageFile);
        return animalJson;
    }

    @GetMapping("/{id}")
    public Animal getAnimalById(@PathVariable Long id) throws ResourceNotFoundException {
        return animalService.findById(id)
                .orElseThrow(ResourceNotFoundException::new);
    }

    /* NOT NEEDED
    @PutMapping("/{animalId}/image")
    public Animal addAnimalImage(@PathVariable long animalId,
                               @RequestPart("animalImage") MultipartFile imageFile) throws IOException {
        return animalService.addAnimalImage(animalId, imageFile);
    }
     */

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

    //TODO: does it belong here? extract?
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
