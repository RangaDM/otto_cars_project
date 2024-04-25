package com.cttorentsystem.ottorentbackend.controllers;


import com.cttorentsystem.ottorentbackend.dtos.AdminDto;
import com.cttorentsystem.ottorentbackend.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/admins")
public class AdminController {

    private AdminService adminService;

    //Build add admin endpoint

    @PostMapping
    public ResponseEntity<AdminDto> createAdmin( @RequestBody AdminDto adminDto) {

        AdminDto saveAdmin = adminService.createAdmin(adminDto);
        System.out.println("hello");

        return  new ResponseEntity<>(saveAdmin, HttpStatus.CREATED);
    }

    //Build get admin by id endpoint
    @GetMapping("/{adminId}")
    public ResponseEntity<AdminDto> getAdminById( @PathVariable("adminId") Long adminId) {

        AdminDto adminDto = adminService.getAdminById(adminId);
        return ResponseEntity.ok(adminDto);
    }



    // Get all admin methode

    @GetMapping
    public ResponseEntity<List<AdminDto>> getAllAdmins() {
        List<AdminDto> admins = adminService.getAllAdmins();
        return ResponseEntity.ok(admins);
    }


    @PutMapping("/{adminId}")
    public ResponseEntity<AdminDto> updateAdmin(@PathVariable("adminId") Long adminId , @RequestBody AdminDto adminDto){
        AdminDto updateAdmin  = adminService.updateAdnimin(adminId,adminDto);
        return ResponseEntity.ok(updateAdmin);
    }

    @DeleteMapping("/{adminId}")
    public  ResponseEntity<String> deleteAdmin(@PathVariable("adminId") Long adminId){
        AdminDto admin = adminService.deleteAdmin(adminId);
        return  ResponseEntity.ok("admin deleted successfully");
    }





}
