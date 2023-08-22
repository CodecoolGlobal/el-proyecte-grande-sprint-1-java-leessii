package com.example.pidi.service;

import com.example.pidi.model.AdoptionStatus;
import com.example.pidi.model.Animal;
import com.example.pidi.model.MedicalDiagnose;
import com.example.pidi.repository.AdoptionStatusRepository;
import com.example.pidi.repository.AnimalRepository;
import com.example.pidi.repository.MedicalDiagnoseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {

    private final AnimalRepository animalRepository;
    private final AdoptionStatusRepository adoptionStatusRepository;
    private final MedicalDiagnoseRepository medicalDiagnoseRepository;

    public AnimalServiceImpl(AnimalRepository animalRepository, AdoptionStatusRepository adoptionStatusRepository, MedicalDiagnoseRepository medicalDiagnoseRepository) {
        this.animalRepository = animalRepository;
        this.adoptionStatusRepository = adoptionStatusRepository;
        this.medicalDiagnoseRepository = medicalDiagnoseRepository;
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
}
