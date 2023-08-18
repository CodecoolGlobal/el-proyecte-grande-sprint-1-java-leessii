package com.example.pidi.service;

import com.example.pidi.model.AdoptionStatus;
import com.example.pidi.model.Animal;
import org.springframework.boot.ApplicationArguments;

import java.util.List;

public interface AdoptionStatusService {
    List<AdoptionStatus> getAllAdoptionStatus();

    //TODO: initialize on running
    AdoptionStatus createAdoptionStatus(AdoptionStatus adoptionStatus);
}
