package com.security.template.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Job;
import com.security.template.repo.JobRepository;


@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job createJob(Job job) {
        return jobRepository.save(job);
    }

    public List<Job> getJobsByJobTitle(String jobTitle) {
        return jobRepository.findByJobTitle(jobTitle);
    }

    public List<Job> getJobsByJobCategory(String jobCategory) {
        return jobRepository.findByJobCategory(jobCategory);
    }

    public List<Job> getJobsByLocation(String location) {
        return jobRepository.findByLocation(location);
    }

    public Job getJobById(Long id) {
        Optional<Job> optionalJob = jobRepository.findById(id);
        return optionalJob.orElse(null);
    }

    public Job updateJob(Job job) {
        if (job == null) {
            throw new NullPointerException("Job cannot be null");
        }
        
        if (job.getId() == null) {
            throw new NullPointerException("Job ID cannot be null");
        }
        
        Job existingJob = getJobById(job.getId());
        if (existingJob == null) {
            return null; // Return null if job is not found
        }
        
        job.setCompany(existingJob.getCompany()); // Set the company to avoid null pointer exception
        return jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}
