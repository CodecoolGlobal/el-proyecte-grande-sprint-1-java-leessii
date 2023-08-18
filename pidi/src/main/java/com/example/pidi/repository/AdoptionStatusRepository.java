package com.example.pidi.repository;

import com.example.pidi.model.AdoptionStatus;
import com.example.pidi.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdoptionStatusRepository extends JpaRepository<AdoptionStatus, Long> {
}
