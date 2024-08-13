package com.security.template.repo;

import com.security.template.model.UserProfile;
import com.security.template.model.UserProfile.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    List<UserProfile> findByType(UserType type);
}
