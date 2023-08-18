package com.example.pidi.service;

import com.example.pidi.model.AdoptionStatus;
import com.example.pidi.model.Animal;
import com.example.pidi.repository.AdoptionStatusRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionStatusServiceImpl implements AdoptionStatusService {

    private final AdoptionStatusRepository adoptionStatusRepository;

    public AdoptionStatusServiceImpl(AdoptionStatusRepository adoptionStatusRepository) {
        this.adoptionStatusRepository = adoptionStatusRepository;
    }

    @Override
    public List<AdoptionStatus> getAllAdoptionStatus() {
        return adoptionStatusRepository.findAll();
    }

    //TODO: initialize on running
    @Override
    public AdoptionStatus createAdoptionStatus(AdoptionStatus adoptionStatus) {
        return adoptionStatusRepository.save(adoptionStatus);
    }
}
