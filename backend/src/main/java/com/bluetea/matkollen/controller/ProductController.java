package com.bluetea.matkollen.controller;

import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.model.ProductGuestDTO;
import com.bluetea.matkollen.repository.ProductRepository;
import com.bluetea.matkollen.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Properties;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class ProductController {

    private final ProductService service;
    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/search/{productName}")
    public ResponseEntity<List<ProductGuestDTO>> searchProductByName(@PathVariable String productName) {
        List<ProductGuestDTO> productGuestDTO = service.getAllByName(productName);
        if (productGuestDTO != null) {
            return ResponseEntity.ok(productGuestDTO);
        }
        return ResponseEntity.notFound().build();
    }

//    @GetMapping("/search/{productId}")
//    public ResponseEntity<ProductGuestDTO> searchProductById(@PathVariable String productId) {
//        ProductGuestDTO productGuestDTO = productRepository.getById(productId);
//        if (productGuestDTO != null) {
//            return ResponseEntity.ok(productGuestDTO);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

}
