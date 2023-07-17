package com.bluetea.matkollen;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

@Configuration
public class ApplicationTestConfig {

    @Bean
    public RestTemplate template(){
        return new RestTemplate();
    }
}
