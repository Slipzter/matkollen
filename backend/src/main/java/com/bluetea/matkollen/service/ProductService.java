package com.bluetea.matkollen.service;

import com.bluetea.matkollen.model.ProductGuestDTO;
import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    ProductRepository repo;

    @Autowired
    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public ProductGuestDTO getByName(String name) {
        livsmedel product = repo.getByName(name);
        return convertToProductGuestDTO(product);
    }

    public List<ProductGuestDTO> getAllByName(String name) {
        List<ProductGuestDTO> list = repo.getAllByName(name).stream().map(this::convertToProductGuestDTO).toList();
        return list;
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
