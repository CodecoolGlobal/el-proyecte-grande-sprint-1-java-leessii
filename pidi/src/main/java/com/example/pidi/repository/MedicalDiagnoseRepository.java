package com.example.pidi.repository;

import com.example.pidi.model.MedicalDiagnose;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicalDiagnoseRepository extends JpaRepository<MedicalDiagnose, Long> {
}
