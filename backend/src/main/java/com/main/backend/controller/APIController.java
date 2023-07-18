package com.main.backend.controller;

import com.main.backend.beans.Registration;
import com.main.backend.service.RegistrationService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private final RegistrationService registrationService;

    public APIController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }


    @PostMapping("/registrations")
    public ResponseEntity<?> createRegistration(@RequestBody @Valid Registration registration, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // Construct a map of field names and their corresponding error messages
            Map<String, String> errors = new HashMap<>();
            for (FieldError error : bindingResult.getFieldErrors()) {
                errors.put(error.getField(), error.getDefaultMessage());
            }

            // Return a response with the validation errors
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
        }

        Registration createdRegistration = registrationService.createRegistration(registration);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRegistration);
    }


    @GetMapping("/registrations")
    public ResponseEntity<List<Registration>> getAllRegistrations() {
        List<Registration> registrations = registrationService.getAllRegistrations();
        return new ResponseEntity<>(registrations, HttpStatus.OK);
    }
}
