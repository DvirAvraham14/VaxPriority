package com.main.backend.beans;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "registration")
public class Registration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "First name is required")
    @Column(name = "first_name")
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Column(name = "last_name")
    private String lastName;

    @NotNull(message = "Date of birth is required")
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @NotBlank(message = "Address is required")
    private String address;

    @NotBlank(message = "City is required")
    private String city;

    @Column(name = "zip_code")
    private String zipCode;

    @NotBlank(message = "Land line is required")
    @Pattern(regexp = "^\\d{2}-?\\d{7}$", message = "Land line must be in the format XX(- optinal)XXXXXXX")
    @Column(name = "land_line")
    private String landLine;

    @NotBlank(message = "Cellular phone is required")
    @Pattern(regexp = "^\\d{3}-?\\d{7}$", message = "Cellular phone must be in the format XXX(- optinal)XXXXXXX")
    @Column(name = "cellular_phone")
    private String cellularPhone;

    @Column(name = "infected_before")
    private Boolean infectedBefore;

    @ElementCollection
    @CollectionTable(name = "previous_conditions", joinColumns = @JoinColumn(name = "registration_id"))
    @Column(name = "condition")
    private List<String> previousConditions;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getLandLine() {
        return landLine;
    }

    public void setLandLine(String landLine) {
        this.landLine = landLine;
    }

    public String getCellularPhone() {
        return cellularPhone;
    }

    public void setCellularPhone(String cellularPhone) {
        this.cellularPhone = cellularPhone;
    }

    public Boolean getInfectedBefore() {
        return infectedBefore;
    }

    public void setInfectedBefore(Boolean infectedBefore) {
        this.infectedBefore = infectedBefore;
    }

    public List<String> getPreviousConditions() {
        return previousConditions;
    }

    public void setPreviousConditions(List<String> previousConditions) {
        this.previousConditions = previousConditions;
    }
}
