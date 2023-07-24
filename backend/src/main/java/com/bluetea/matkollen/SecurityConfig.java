package com.bluetea.matkollen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    CustomSuccessHandler handler;

    @Autowired
    public SecurityConfig(CustomSuccessHandler handler) {
        this.handler = handler;
    }

/*    @Bean
    DefaultSecurityFilterChain defaultChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(auth ->
                        auth.requestMatchers("/**").permitAll()
                )
                .cors(withDefaults())
            .build();
    }*/

    @Bean
    DefaultSecurityFilterChain defaultChain(HttpSecurity http) throws Exception {
        return http.authorizeHttpRequests(auth ->
                auth
                        .requestMatchers("/**").permitAll()
//                        .requestMatchers("/","/search", "/guest", "/guest/**").permitAll()
//                        .requestMatchers( "/user/**").authenticated()
                )
                .oauth2Login(login -> login.successHandler(handler))
                .cors(withDefaults())
//                .oauth2ResourceServer(it -> it.jwt(withDefaults()))
                .csrf().disable()
                .build();
    }
}

