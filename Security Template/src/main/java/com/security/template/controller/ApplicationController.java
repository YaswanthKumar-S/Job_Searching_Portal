package com.security.template.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.security.template.model.Application;
import com.security.template.service.ApplicationService;



@RestController
@RequestMapping("/api/applications")
public class ApplicationController {
  
  @Autowired
  private ApplicationService applicationService;
  
  @PostMapping
  public ResponseEntity<Application> createApplication(@RequestBody Application application) {
    Application createdApplication = applicationService.createApplication(application);
    return new ResponseEntity<>(createdApplication, HttpStatus.CREATED);
  }
  
  @GetMapping("/job/{jobId}")
  public ResponseEntity<List<Application>> getApplicationsByJobId(@PathVariable Long jobId) {
    List<Application> applications = applicationService.getApplicationsByJobId(jobId);
    return new ResponseEntity<>(applications, HttpStatus.OK);
  }
  
  @GetMapping("/{id}")
  public ResponseEntity<Application> getApplicationById(@PathVariable Long id) {
    Application application = applicationService.getApplicationById(id);
    return new ResponseEntity<>(application, HttpStatus.OK);
  }
  
  @PutMapping("/{id}")
  public ResponseEntity<Application> updateApplication(@PathVariable Long id, @RequestBody Application application) {
    application.setId(id);
    Application updatedApplication = applicationService.updateApplication(application);
    return new ResponseEntity<>(updatedApplication, HttpStatus.OK);
  }
  
  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteApplication(@PathVariable Long id) {
    applicationService.deleteApplication(id);
    return ResponseEntity.noContent().build();
  }
}
