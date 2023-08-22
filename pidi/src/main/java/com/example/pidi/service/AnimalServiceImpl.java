package com.example.pidi.service;

import com.example.pidi.model.Animal;
import com.example.pidi.repository.AnimalRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService {

    private final AnimalRepository animalRepository;

    public AnimalServiceImpl(AnimalRepository animalRepository) {
        this.animalRepository = animalRepository;
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
    public Optional<Animal> update(long id, Animal animalDetails) {
        /*
        Optional<Animal> animal;
        animal = animalRepository.findById(id);

        if(animal.isPresent()) {
            animal.setName(animalDetails.getName());
            animal.setAge(animalDetails.getAge());
            animal.setSpecies(animalDetails.getSpecies());

            return animalRepository.save(animal);
        }
         */
        return null;
    }

    @Override
    public void delete(long id) {
        animalRepository.deleteById(id);
    }

    @Override
    public void clearTable() {
        animalRepository.deleteAll();
    }
}
