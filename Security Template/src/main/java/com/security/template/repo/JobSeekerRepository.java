package com.security.template.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.JobSeeker;


@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker, Long> {

    JobSeeker findByEmail(String email);
}