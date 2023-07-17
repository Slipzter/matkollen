package com.bluetea.matkollen;

import com.bluetea.matkollen.model.ProductGuestDTO;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("test")
class MatkollenApplicationTests {


	@Value("${server.port}")
	private int port;

	@Autowired
	RestTemplate restTemplate;

	@Test
	void contextLoads() {
	}

	@Test
	void shouldGetProductByName(){
		String uri = "http://localhost:%s/search/Broccoli".formatted(port);
		ResponseEntity<ProductGuestDTO[]> exchange = restTemplate.exchange(uri, HttpMethod.GET, HttpEntity.EMPTY, ProductGuestDTO[].class);
		assertThat(exchange.getStatusCode()).isEqualTo(HttpStatus.OK);
		assertThat(exchange.getBody()[0].livsmedelsnamn()).isEqualTo("Broccoli");
	}
}
