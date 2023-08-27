package com.example.pidi.model;

public enum AdoptionStatusType {
    AVAILABLE("Available"),
    IN_PROGRESS("In Progress"),
    NOT_AVAILABLE("Not Available"),
    ADOPPTED("Adoppted");

    private final String string;

    AdoptionStatusType(String string) {
        this.string = string;
    }
    public String getString() {
        return string;
    }
}
