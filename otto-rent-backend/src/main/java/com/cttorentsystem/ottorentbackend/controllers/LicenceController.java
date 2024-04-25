package com.cttorentsystem.ottorentbackend.controllers;


import com.cttorentsystem.ottorentbackend.dtos.LicenceDto;
import com.cttorentsystem.ottorentbackend.service.LicenceService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/licences")
public class LicenceController {
    private  LicenceService licenceService;



    @PostMapping
    public ResponseEntity<LicenceDto> createLicence(@RequestBody LicenceDto licenceDto) {

        LicenceDto saveLicence = licenceService.createLicence(licenceDto);

        return new ResponseEntity<>(saveLicence, HttpStatus.CREATED);
    }




}