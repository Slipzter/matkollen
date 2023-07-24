package com.bluetea.matkollen.controller;

import com.bluetea.matkollen.model.foodUser;
import com.bluetea.matkollen.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class UserController {
    private final UserService service;
    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

//    @GetMapping(value = "/user/search/{productName}")
//    public ResponseEntity<foodUser> searchUserById(@PathVariable String) {
//        foodUser user = service.getById()
//        if (user != null) {
//            return ResponseEntity.ok(user);
//        }
//        return ResponseEntity.notFound().build();
//    }

}
