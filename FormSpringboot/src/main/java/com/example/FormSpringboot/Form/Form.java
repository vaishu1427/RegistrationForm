package com.example.FormSpringboot.Form;


import jakarta.persistence.*;

import static jakarta.persistence.GenerationType.*;

@Entity
public class Form {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column
    private String firstname;

    @Column
    private String lastname;

    @Column
    private int age;

    @Column
    private String email;

    @Column
    private String gender;

    @Column
    private String known_language;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getKnown_language() {
        return known_language;
    }

    public void setKnown_language(String known_language) {
        this.known_language = known_language;
    }

}
