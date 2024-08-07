package com.security.template.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.template.model.JobSeeker;
import com.security.template.service.JobSeekerService;


@RestController
@RequestMapping("/api/jobseekers")
public class JobseekerController {

    @Autowired
    private JobSeekerService jobseekerService;

    @PostMapping
    public JobSeeker createJobseeker(@RequestBody JobSeeker jobseeker) {
        return jobseekerService.createJobseeker(jobseeker);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobSeeker> getJobseekerById(@PathVariable Long id) {
        Optional<JobSeeker> jobseeker = jobseekerService.getJobseekerById(id);
        return jobseeker.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<JobSeeker> getJobseekerByEmail(@PathVariable String email) {
        Optional<JobSeeker> jobseeker = jobseekerService.getJobseekerByEmail(email);
        return jobseeker.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public JobSeeker updateJobseeker(@PathVariable Long id, @RequestBody JobSeeker jobseeker) {
        jobseeker.setId(id);
        return jobseekerService.updateJobseeker(jobseeker);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobseeker(@PathVariable Long id) {
        jobseekerService.deleteJobseeker(id);
        return ResponseEntity.noContent().build();
    }
}