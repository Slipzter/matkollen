package com.bluetea.matkollen;

import com.bluetea.matkollen.model.foodUser;
import com.bluetea.matkollen.service.UserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CustomSuccessHandler implements AuthenticationSuccessHandler {

    UserService service;

    @Autowired
    public CustomSuccessHandler(UserService service) {
        this.service = service;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OidcUser user = (OidcUser) authentication.getPrincipal();
        foodUser currentUser = new foodUser(user.getName(), user.getFullName(), user.getEmail());
        service.createUser(currentUser);

//        Cookie tokenCookie = new Cookie("userId", user.getName());
//        tokenCookie.setMaxAge(60);
//        tokenCookie.setPath("/");
//        tokenCookie.setHttpOnly(false);
//        tokenCookie.setSecure(true);
//        response.addCookie(tokenCookie);

        System.out.println("Id: " + user.getName() + "\n");
        System.out.println("Email: " + user.getEmail() + "\n");
        System.out.println("Full name: " + user.getFullName() + "\n");

        response.sendRedirect("https://matkollen-frontend.vercel.app/user/home" + "?id=" + user.getName());
    }

}
