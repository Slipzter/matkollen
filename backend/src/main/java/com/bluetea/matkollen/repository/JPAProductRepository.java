package com.bluetea.matkollen.repository;

import com.bluetea.matkollen.model.livsmedel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JPAProductRepository extends JpaRepository<livsmedel, String> {
    livsmedel findByLivsmedelsnamn(String name);
    List<livsmedel> findAllByLivsmedelsnamn(String name);
}
