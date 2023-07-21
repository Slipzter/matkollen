package com.bluetea.matkollen;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    CustomSuccessHandler handler;

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
                        .requestMatchers("/").permitAll()
                        .requestMatchers("/home").authenticated()
        )          .oauth2Login(login -> login.successHandler(handler))
                .cors(withDefaults())
//                .oauth2ResourceServer(it -> it.jwt(withDefaults()))
                .csrf().disable()
                .build();
    }
}

