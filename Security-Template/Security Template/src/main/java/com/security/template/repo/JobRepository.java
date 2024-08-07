package com.security.template.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Job;


@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findByJobTitle(String jobTitle);

    List<Job> findByJobCategory(String jobCategory);

    List<Job> findByLocation(String location);
}