package com.cttorentsystem.ottorentbackend.service.impl;

import com.cttorentsystem.ottorentbackend.dtos.AdminDto;
import com.cttorentsystem.ottorentbackend.entity.Admin;
import com.cttorentsystem.ottorentbackend.exception.ResourceNotFoundException;
import com.cttorentsystem.ottorentbackend.mapper.AdminMapper;
import com.cttorentsystem.ottorentbackend.repositorys.AdminReporsitory;
import com.cttorentsystem.ottorentbackend.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {


    private AdminReporsitory adminReporsitory;

    @Override
    public AdminDto createAdmin(AdminDto adminDto) {

        Admin admin = AdminMapper.mapToAdmin(adminDto);

       Admin saveAdmin = adminReporsitory.save(admin);



        return AdminMapper.mapToAdminDto(saveAdmin);
    }

    @Override
    public AdminDto getAdminById(Long adminId) {

      Admin admin =  adminReporsitory.findById(adminId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Admin not found with id : " + adminId));
        return  AdminMapper.mapToAdminDto(admin);
    }

    @Override
    public List<AdminDto> getAllAdmins() {

        List<Admin> adminList = adminReporsitory.findAll();

        return adminList.stream().map(AdminMapper::mapToAdminDto).toList();
    }

    @Override
    public AdminDto updateAdnimin(Long adminId, AdminDto updateAdmin) {

        Admin admin = adminReporsitory.findById(adminId).orElseThrow(() ->
                new ResourceNotFoundException("Admin not found with id : " + adminId));

        admin.setEmail(updateAdmin.getEmail());
        admin.setFirstName(updateAdmin.getFirstName());
        admin.setLastName(updateAdmin.getLastName());
        admin.setPhoneNO(updateAdmin.getPhoneNO());
        admin.setPassword(updateAdmin.getPassword());
        admin.setAddress(updateAdmin.getAddress());
        admin.setProfilePic(updateAdmin.getProfilePic());
       Admin upDaterdAdmin = adminReporsitory.save(admin);


        return AdminMapper.mapToAdminDto(upDaterdAdmin);
    }

    @Override
    public AdminDto deleteAdmin(Long adminId) {

        Admin admin = adminReporsitory.findById(adminId).orElseThrow(()->
                new ResourceNotFoundException("Admin Not found with user Id "+ adminId)
        );

        adminReporsitory.deleteById(adminId);
        return null;
    }


}
