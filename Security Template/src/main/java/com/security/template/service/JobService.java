package com.security.template.service;

import com.security.template.model.Job;
import com.security.template.repo.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    // Post a job
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    // Get a job by ID
    public Optional<Job> getJobById(Long id) {
        return jobRepository.findById(id);
    }

    // Get all jobs
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Delete a job
    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }

    // Check if the job is occupied (for example, if it has applications)
    public boolean isJobOccupied(Long id) {
        Optional<Job> job = jobRepository.findById(id);
        return job.isPresent() && !job.get().getApplications().isEmpty();
    }
}
