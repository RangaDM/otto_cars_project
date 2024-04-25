package com.cttorentsystem.ottorentbackend.service;

import com.cttorentsystem.ottorentbackend.dtos.AdminDto;

import java.util.List;

public interface AdminService {

    AdminDto  createAdmin(AdminDto adminDto);

    AdminDto getAdminById(Long adminId);

    List<AdminDto> getAllAdmins();

    AdminDto updateAdnimin(Long adminId,AdminDto updateAdmin);

    AdminDto deleteAdmin (Long adminId);

}
