package com.icia.el;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.icia.el.dto.UserInfoDTO;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/api/naver")
public class ServerApiController {
	
	@GetMapping("/local")
	public String local(@RequestParam String search) throws UnsupportedEncodingException {
		
		String clientId = "pIXfhwPvW98egBrr1O5X";
		String clientSecret = "rNzUugkwm9";
		
		System.out.println(search);
		
		URI uri = UriComponentsBuilder.fromUriString("https://openapi.naver.com/")
				.path("v1/search/local.json")
				.queryParam("query", search)
				.queryParam("display", 5)
				.queryParam("start", 1)
				.queryParam("sort", "random")
				.encode()
				.build()
				.toUri();
		
		log.info("uri : {}", uri);
		RestTemplate restTemplate = new RestTemplate();
		
		RequestEntity<Void> reqEntity = 
			RequestEntity.get(uri)
						 .header("X-Naver-Client-Id", clientId)
						 .header("X-Naver-Client-Secret", clientSecret)
						 .build();
		
		ResponseEntity<String> result = restTemplate.exchange(reqEntity, String.class);
		return result.getBody();
		
	}
	
	@GetMapping("/blog")
	public String blog(@RequestParam String search) throws UnsupportedEncodingException {
		
		String clientId = "pIXfhwPvW98egBrr1O5X";
		String clientSecret = "rNzUugkwm9";
		
		URI uri = UriComponentsBuilder.fromUriString("https://openapi.naver.com/")
				.path("v1/search/blog.json")
				.queryParam("query", search)
				.queryParam("display", 20)
				.queryParam("start", 1)
				.queryParam("sort", "sim")
				.encode()
				.build()
				.toUri();
		
		log.info("uri : {}", uri);
		RestTemplate restTemplate = new RestTemplate();
		
		RequestEntity<Void> reqEntity = 
				RequestEntity.get(uri)
				.header("X-Naver-Client-Id", clientId)
				.header("X-Naver-Client-Secret", clientSecret)
				.build();
		
		ResponseEntity<String> result = restTemplate.exchange(reqEntity, String.class);
		return result.getBody();
		
	}
	
	@GetMapping("/image")
	public String image(@RequestParam String search) throws UnsupportedEncodingException {
		
		String clientId = "pIXfhwPvW98egBrr1O5X";
		String clientSecret = "rNzUugkwm9";
		
		URI uri = UriComponentsBuilder.fromUriString("https://openapi.naver.com/")
				.path("v1/search/image")
				.queryParam("query", search)
				.queryParam("display", 100)
				.queryParam("start", 1)
				.queryParam("sort", "sim")
				.queryParam("filter", "medium")
				.encode()
				.build()
				.toUri();
		
		log.info("uri : {}", uri);
		RestTemplate restTemplate = new RestTemplate();
		
		RequestEntity<Void> reqEntity = 
				RequestEntity.get(uri)
				.header("X-Naver-Client-Id", clientId)
				.header("X-Naver-Client-Secret", clientSecret)
				.build();
		
		ResponseEntity<String> result = restTemplate.exchange(reqEntity, String.class);
		return result.getBody();
		
	}
	
	
}
