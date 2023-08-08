package com.example.pidi.model;


import jakarta.persistence.*;

@Entity
@Table (name = "animals")
public class Animal {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long Id;

    @Column (name = "name")
    private String name;

    @Column (name = "species")
    private  String species;

    @Column (name = "weight")
    private double weight;

    @Column (name = "age")
    private int age;

    public Animal(String name, String species, double weight, int age) {
        this.name = name;
        this.species = species;
        this.weight = weight;
        this.age = age;
    }

    public Animal() {

    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
