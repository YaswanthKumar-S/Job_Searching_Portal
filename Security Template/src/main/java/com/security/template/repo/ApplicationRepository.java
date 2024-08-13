package com.security.template.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.security.template.model.Application;


@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

  List<Application> findByJobId(Long jobId);

  List<Application> findByApplicationStatus(String applicationStatus);
}