package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Company;


@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    Company findByCompanyName(String companyName);
    
    Company findByCompanyEmail(String companyEmail);
}