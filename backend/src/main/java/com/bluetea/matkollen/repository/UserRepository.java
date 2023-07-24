package com.bluetea.matkollen.repository;


import com.bluetea.matkollen.model.foodUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    JPAUserRepository repo;

    @Autowired
    public UserRepository(JPAUserRepository repo) {
        this.repo = repo;
    }

    public foodUser getById(String id) {
        return repo.findById(id).get();
    }

    public void createUser(foodUser newFoodUser) {
        repo.save(newFoodUser);
    }
}
