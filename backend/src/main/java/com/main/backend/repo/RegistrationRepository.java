package com.main.backend.repo;

import com.main.backend.beans.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    // Additional custom query methods if needed
}
