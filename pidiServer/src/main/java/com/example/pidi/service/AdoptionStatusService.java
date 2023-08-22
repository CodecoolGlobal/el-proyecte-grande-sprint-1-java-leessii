package com.example.pidi.service;

import com.example.pidi.model.AdoptionStatus;

import java.util.List;

public interface AdoptionStatusService {
    List<AdoptionStatus> findAll();
    AdoptionStatus save(AdoptionStatus adoptionStatus);
}
