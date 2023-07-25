package com.bluetea.matkollen.controller;

import com.bluetea.matkollen.model.livsmedel;
import com.bluetea.matkollen.model.ProductGuestDTO;
import com.bluetea.matkollen.repository.ProductRepository;
import com.bluetea.matkollen.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
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

    @GetMapping(value = "/guest/search/{searchQuery}")
    public ResponseEntity<List<ProductGuestDTO>> searchProductByName(@AuthenticationPrincipal OidcUser oidcUser, @PathVariable String searchQuery) {
        if (oidcUser != null) {
            System.out.println("GET request by: " + oidcUser.getUserInfo().getFullName());
        }
        List<ProductGuestDTO> productGuestDTO = service.getAllByName(searchQuery);
        if (productGuestDTO != null) {
            return ResponseEntity.ok(productGuestDTO);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/guest/product/{productName}")
    public ResponseEntity<ProductGuestDTO> getProductByName(@PathVariable String productName) {
        ProductGuestDTO product = service.getProductByName(productName);
        if (product != null) {
            return ResponseEntity.ok(product);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/user/search/{searchQuery}")
    public ResponseEntity<List<livsmedel>> searchFullProductByName(@AuthenticationPrincipal OidcUser oidcUser, @PathVariable String searchQuery) {
        if (oidcUser != null) {
            System.out.println("GET request by: " + oidcUser.getUserInfo().getFullName());
        }
        List<livsmedel> livsmedelList = service.getAllProductsByName(searchQuery);
        if (livsmedelList != null) {
            return ResponseEntity.ok(livsmedelList);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping(value = "/user/product/{productName}")
    public ResponseEntity<livsmedel> getFullProductById(@PathVariable String productName) {
        livsmedel product = service.getFullProductByName(productName);
        if (product != null) {
            return ResponseEntity.ok(product);
        }
        return ResponseEntity.notFound().build();
    }

}
