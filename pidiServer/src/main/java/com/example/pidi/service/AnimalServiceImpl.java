package com.example.pidi.service;

import com.example.pidi.constants.Constants;
import com.example.pidi.model.AdoptionStatusType;
import com.example.pidi.model.Animal;
import com.example.pidi.model.AnimalImage;
import com.example.pidi.model.MedicalDiagnose;
import com.example.pidi.repository.AdoptionStatusRepository;
import com.example.pidi.repository.AnimalImageRepository;
import com.example.pidi.repository.AnimalRepository;
import com.example.pidi.repository.MedicalDiagnoseRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {

    private final AnimalRepository animalRepository;
    private final AdoptionStatusRepository adoptionStatusRepository;
    private final MedicalDiagnoseRepository medicalDiagnoseRepository;
    private final AnimalImageRepository animalImageRepository;

    public AnimalServiceImpl(AnimalRepository animalRepository, AdoptionStatusRepository adoptionStatusRepository, MedicalDiagnoseRepository medicalDiagnoseRepository, AnimalImageRepository animalImageRepository) {
        this.animalRepository = animalRepository;
        this.adoptionStatusRepository = adoptionStatusRepository;
        this.medicalDiagnoseRepository = medicalDiagnoseRepository;
        this.animalImageRepository = animalImageRepository;
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
    public Animal save(Animal animal) {
        animal.setOpenForAdoption(AdoptionStatusType.AVAILABLE.getString().equals(animal.getAdoptionStatus().getStatus()));
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
        // TODO: implement and have fun
        return null;
    }

    @Override
    public Animal addAnimalImage(long animalId, MultipartFile imageFile) throws IOException {
        String filePath = Constants.imageStorageFolderPath + "/" + imageFile.getOriginalFilename();
        Optional<Animal> animalOptional = animalRepository.findById(animalId);

        if (animalOptional.isPresent()) {
            Animal animal = animalOptional.get();

            if (animalOptional.get().getAnimalImage() != null) {
                long animalImageId = animal.getAnimalImage().getId();

                animal.setAnimalImage(null);
                animalRepository.save(animal);

                deleteAnimalImage(animalImageId);
            }

            AnimalImage animalImage = animalImageRepository.save(AnimalImage.builder()
                    .name(imageFile.getOriginalFilename())
                    .type(imageFile.getContentType())
                    .imageSize(imageFile.getSize())
                    .filePath(filePath)
                    .build());

            imageFile.transferTo(new File(filePath));

            animal.setAnimalImage(animalImage);
            return animalRepository.save(animal);
        }

        return animalOptional.get();
    }

    @Override
    public void deleteAnimalImage(long imageId) {
        animalImageRepository.deleteById(imageId);
    }

}
