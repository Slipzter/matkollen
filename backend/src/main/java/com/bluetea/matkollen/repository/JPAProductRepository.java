package com.bluetea.matkollen.repository;

import com.bluetea.matkollen.model.livsmedel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JPAProductRepository extends JpaRepository<livsmedel, String> {
    livsmedel findByLivsmedelsnamn(String name);

    @Query("SELECT product FROM livsmedel product WHERE product.livsmedelsnamn LIKE CONCAT('%', :searchString, '%')")
    List<livsmedel> findAllByName(@Param("searchString") String searchString);
}
