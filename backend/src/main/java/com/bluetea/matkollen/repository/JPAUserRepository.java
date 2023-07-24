package com.bluetea.matkollen.repository;

import com.bluetea.matkollen.model.foodUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JPAUserRepository extends JpaRepository<foodUser, String> {
}
