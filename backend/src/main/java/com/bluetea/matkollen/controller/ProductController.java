package com.bluetea.matkollen.controller;

import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.model.ProductGuestDTO;
import com.bluetea.matkollen.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("")
public class ProductController {
    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

//    @GetMapping("/search/{productName}")
//    public ResponseEntity<ProductGuestDTO> searchProductByName(@PathVariable String productName) {
//        ProductGuestDTO productGuestDTO = productRepository.getByName(productName);
//        if (productGuestDTO != null) {
//            return ResponseEntity.ok(productGuestDTO);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @GetMapping("/search/{productId}")
    public ResponseEntity<ProductGuestDTO> searchProductById(@PathVariable String productId) {
        ProductGuestDTO productGuestDTO = productRepository.getById(productId);
        if (productGuestDTO != null) {
            return ResponseEntity.ok(productGuestDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<livsmedel>> findAll() {
        List<livsmedel> list = productRepository.getAll();
        return ResponseEntity.ok(list);
    }

}
