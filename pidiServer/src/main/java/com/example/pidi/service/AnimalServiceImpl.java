package com.example.pidi.service;

import com.example.pidi.model.AdoptionStatusType;
import com.example.pidi.model.Animal;
import com.example.pidi.model.AnimalImage;
import com.example.pidi.model.MedicalDiagnose;
import com.example.pidi.repository.AnimalImageRepository;
import com.example.pidi.repository.AnimalRepository;
import com.example.pidi.repository.MedicalDiagnoseRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Value;
// for filesaving
// for filesaving
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.io.IOException;
import java.sql.SQLOutput;
import java.util.List;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {

    private final AnimalRepository animalRepository;
    private final MedicalDiagnoseRepository medicalDiagnoseRepository;
    private final AnimalImageRepository animalImageRepository;
    private final String imageFolderPath;

    public AnimalServiceImpl(AnimalRepository animalRepository,
                             MedicalDiagnoseRepository medicalDiagnoseRepository,
                             AnimalImageRepository animalImageRepository,
                            @Value("${storage.images.folder}") String imageFolderPath) {
        this.animalRepository = animalRepository;
        this.medicalDiagnoseRepository = medicalDiagnoseRepository;
        this.animalImageRepository = animalImageRepository;
        this.imageFolderPath = imageFolderPath;
    }

    @Override
    public List<Animal> findAll() {
        return animalRepository.findAll();
    }

    @Override
    public List<Animal> getAnimalsForAdoption() {
        return animalRepository.findByOpenForAdoptionIsTrue();
    }

    @Override
    public Animal save(Animal animal, MultipartFile imageFile) throws IOException {
        animal.setOpenForAdoption(AdoptionStatusType.AVAILABLE.getString().equals(animal.getAdoptionStatus().getStatus()));
        if (imageFile != null) {
            saveAnimalImage(animal, imageFile);
        }
        return animalRepository.save(animal);
    }

    @Override
    public Optional<Animal> findById(long id) {
        return animalRepository.findById(id);
    }

    @Override
    public void delete(long id) {
        animalRepository.deleteById(id);
    }

    @Override
    public void clearTable() {
        animalRepository.deleteAll();
    }

    @Override
    public Animal addMedicalDiagnose(long animalId, MedicalDiagnose medicalDiagnose) {
        // TODO: implement
        return null;
    }


    @Override
    public void deleteAnimalImage(long imageId) {
        animalImageRepository.deleteById(imageId);
    }

    @Override
    public Animal getJson(String animal, MultipartFile imageFile) {
        Animal animalJson = new Animal();

        try {
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.registerModule(new JavaTimeModule());
            animalJson = objectMapper.readValue(animal, Animal.class);
        } catch (IOException err) {
            System.out.printf("Error", err);
        }

        return animalJson;
    }
private Animal saveAnimalImage(Animal animal, MultipartFile imageFile) throws IOException {
        // Get the project's root directory by finding a classpath resource
        ClassPathResource classPathResource = new ClassPathResource("");
        String projectPath = classPathResource.getFile().getAbsolutePath();

        // Define the relative path to the image storage folder within your project
        String originalFilename = imageFile.getOriginalFilename();
        String sanitizedFilename = originalFilename.replaceAll(" ", "_"); // Replace spaces with underscores
        String relativeImagePath = "src/main/resources/imageStorage/" + sanitizedFilename;

        if (animal.getAnimalImage() != null) {
            long animalImageId = animal.getAnimalImage().getId();

            animal.setAnimalImage(null);
            animalRepository.save(animal);

            deleteAnimalImage(animalImageId);
        }

        animal.setAnimalImage(AnimalImage.builder()
                .name(sanitizedFilename)
                .type(imageFile.getContentType())
                .imageSize(imageFile.getSize())
                .filePath(relativeImagePath)  // Store the relative path in the database
                .build());

        // Construct the File object for saving the image
        File imageStorageFile = new File(projectPath + File.separator + relativeImagePath);
        System.out.println("FILE SAVED HERE "+imageStorageFile);

        // Ensure that the parent directories exist, creating them if necessary
        imageStorageFile.getParentFile().mkdirs();

        // Transfer the uploaded image to the specified file path
        imageFile.transferTo(imageStorageFile);

        return animal;
    }
}
