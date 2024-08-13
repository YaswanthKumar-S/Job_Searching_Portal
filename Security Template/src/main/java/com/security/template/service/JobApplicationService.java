package com.security.template.service;

import com.security.template.model.Job;
import com.security.template.model.JobApplication;
import com.security.template.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public JobApplication saveApplication(String name, String email, String phoneNumber, MultipartFile resume, Long jobId) throws Exception {
        JobApplication jobApplication = new JobApplication();
        jobApplication.setName(name);
        jobApplication.setEmail(email);
        jobApplication.setPhoneNumber(phoneNumber);
        jobApplication.setResume(resume.getBytes()); // Save file as byte array// Assuming Job constructor takes ID
        return jobApplicationRepository.save(jobApplication);
    }
    public List<JobApplication> getAllApplications() {
        return jobApplicationRepository.findAll();
    }

}
