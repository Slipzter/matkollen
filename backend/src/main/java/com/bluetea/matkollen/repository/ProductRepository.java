package com.bluetea.matkollen.repository;

import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.model.ProductGuestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository {

    private final JPAProductRepository repo;

    @Autowired
    public ProductRepository(JPAProductRepository repo) {
        this.repo = repo;
    }

    public livsmedel getByName(String name) {
        livsmedel product = repo.findByLivsmedelsnamn(name);
        return product;
    }

    public List<livsmedel> getAllByName(String name) {
        List<livsmedel> list = repo.findAllByName(name);
        return list;
    }

    public livsmedel getById(String id) {
        livsmedel product = repo.findById(id).orElse(null);
        return product;
    }

    public List<livsmedel> getAll() {
        return repo.findAll();
    }



}
