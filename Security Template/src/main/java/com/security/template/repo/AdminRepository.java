package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Admin;


@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
    
    Admin findByEmail(String email);
}