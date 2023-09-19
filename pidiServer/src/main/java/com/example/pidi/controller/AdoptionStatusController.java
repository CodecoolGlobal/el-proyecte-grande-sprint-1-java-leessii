package com.example.pidi.controller;

import com.example.pidi.model.AdoptionStatus;
import com.example.pidi.service.AdoptionStatusService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/adoption/status")
public class AdoptionStatusController {

    private final AdoptionStatusService adoptionStatusService;

    public AdoptionStatusController(AdoptionStatusService adoptionStatusService) {
        this.adoptionStatusService = adoptionStatusService;
    }

    @GetMapping
    public List<AdoptionStatus> getAllAdoptionStatus() {
        return adoptionStatusService.findAll();
    }
    @PostMapping
    public AdoptionStatus createAdoptionStatus(@RequestBody AdoptionStatus adoptionStatus) {
        return adoptionStatusService.save(adoptionStatus);
    }
}
