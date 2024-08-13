package com.security.template.controller;

import com.security.template.model.JobApplication;
import com.security.template.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping
    public void apply(@RequestParam("name") String name,
                      @RequestParam("email") String email,
                      @RequestParam("phoneNumber") String phoneNumber,
                      @RequestParam("resume") MultipartFile resume,
                      @RequestParam("jobId") Long jobId) throws Exception {
        jobApplicationService.saveApplication(name, email, phoneNumber, resume, jobId);
    }
    @GetMapping
    public List<JobApplication> getAllApplications() {
        return jobApplicationService.getAllApplications();
    }

}
