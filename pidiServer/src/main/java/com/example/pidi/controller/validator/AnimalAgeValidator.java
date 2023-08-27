package com.example.pidi.controller.validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class AnimalAgeValidator implements ConstraintValidator<AnimalAgeConstraint, Integer> {
    @Override
    public void initialize(AnimalAgeConstraint constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        return value != null && value >= 1 && value <= 100;
    }
}




