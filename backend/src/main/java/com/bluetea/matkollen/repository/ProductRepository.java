package com.bluetea.matkollen.repository;

import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.model.ProductGuestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository {

    @Autowired
    JPAProductRepository repo;
    public ProductGuestDTO getByName(String name) {
        livsmedel product = repo.findByLivsmedelsnamn(name);
        return convertToProductGuestDTO(product);
    }

    public ProductGuestDTO getById(String id) {
        livsmedel product = repo.findById(id).orElse(null);
        return convertToProductGuestDTO(product);
    }

    public List<livsmedel> getAll() {
        return repo.findAll();
    }

    private ProductGuestDTO convertToProductGuestDTO (livsmedel product) {
        return new ProductGuestDTO(
                product.getLivsmedelsnamn(),
                product.getEnergi_kcal(),
                product.getFett_totalt_g(),
                product.getProtein_g(),
                product.getKolhydrater_g()
        );
    }

}
