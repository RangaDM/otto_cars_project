package com.cttorentsystem.ottorentbackend.controllers;

import com.cttorentsystem.ottorentbackend.dtos.InsuranceDetailsDto;
import com.cttorentsystem.ottorentbackend.service.InsuranceDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/insuranceDetails")
public class InsuranceDetailsController {
    private InsuranceDetailsService insuranceDetailsService;

    @PostMapping
    public ResponseEntity<InsuranceDetailsDto> addInsuranceDetails( @RequestBody InsuranceDetailsDto insuranceDetailsDto) {
        InsuranceDetailsDto savedInsuranceDetails = insuranceDetailsService.addInsuranceDetails(insuranceDetailsDto);
        return new ResponseEntity<>(savedInsuranceDetails, HttpStatus.CREATED);
    }
}
