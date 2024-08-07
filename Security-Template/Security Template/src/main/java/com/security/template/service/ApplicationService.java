package com.security.template.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Application;
import com.security.template.repo.ApplicationRepository;


@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public Application createApplication(Application application) {
        return applicationRepository.save(application);
    }

    public List<Application> getApplicationsByJobId(Long jobId) {
        return applicationRepository.findByJobId(jobId);
    }


    public Application getApplicationById(Long id) {
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        return optionalApplication.orElseThrow();
    }

    public Application updateApplication(Application application) {
        return applicationRepository.save(application);
    }

    public void deleteApplication(Long id) {
        applicationRepository.deleteById(id);
    }
}