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
        String formatted = name.replace("%20", " ");
        List<ProductGuestDTO> list = repo.getAllByName(formatted).stream().map(this::convertToProductGuestDTO).toList();
        if (list.size() == 0) {
            return null;
        }
        return list;
    }

    public List<livsmedel> getAllProductsByName(String name) {
        String formatted = name.replace("%20", " ");
        List<livsmedel> list = repo.getAllByName(formatted);
        if (list.size() == 0) {
            return null;
        }
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
