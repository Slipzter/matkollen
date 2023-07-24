package com.bluetea.matkollen.service;

import com.bluetea.matkollen.model.foodUser;
import com.bluetea.matkollen.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }


    public foodUser getById(String id) {
        return repo.getById(id);
    }

    public void createUser(foodUser newFoodUser) {
        repo.createUser(newFoodUser);
    }

    public foodUser getUserById(String id) {
        return repo.getById(id);
    }
}
