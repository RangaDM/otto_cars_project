package com.cttorentsystem.ottorentbackend.controllers;


import com.cttorentsystem.ottorentbackend.dtos.ServiceDetailsDto;
import com.cttorentsystem.ottorentbackend.service.ServiceDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/serviceDetails")
public class ServiceDetailsController {

    private ServiceDetailsService serviceDetailsService;

    @PostMapping
    public ResponseEntity<ServiceDetailsDto> createServiceDetails(@RequestBody ServiceDetailsDto serviceDetailsDto) {
        ServiceDetailsDto saveServiceDetails = serviceDetailsService.createServiceDetails(serviceDetailsDto);
        return new ResponseEntity<>(saveServiceDetails, HttpStatus.CREATED);
    }

}
