package com.security.template.service;

import com.security.template.model.UserProfile;
import com.security.template.repo.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public List<UserProfile> getAllUserProfiles() {
        return userProfileRepository.findAll();
    }

    public List<UserProfile> getUserProfilesByType(UserProfile.UserType type) {
        return userProfileRepository.findByType(type);
    }

    public UserProfile createUserProfile(UserProfile userProfile) {
        return userProfileRepository.save(userProfile);
    }

    public UserProfile updateUserProfile(Long id, UserProfile userProfile) {
        UserProfile existingProfile = userProfileRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserProfile not found"));
        existingProfile.setName(userProfile.getName());
        existingProfile.setEmail(userProfile.getEmail());
        existingProfile.setType(userProfile.getType());
        return userProfileRepository.save(existingProfile);
    }

    public void deleteUserProfile(Long id) {
        userProfileRepository.deleteById(id);
    }
}
