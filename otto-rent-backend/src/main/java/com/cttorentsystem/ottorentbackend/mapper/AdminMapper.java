package com.cttorentsystem.ottorentbackend.mapper;

import com.cttorentsystem.ottorentbackend.dtos.AdminDto;
import com.cttorentsystem.ottorentbackend.entity.Admin;

public class AdminMapper {

    public static AdminDto mapToAdminDto(Admin admin) {

       return new AdminDto(
               admin.getId(),
               admin.getFirstName(),
               admin.getLastName(),
               admin.getEmail(),
               admin.getPassword(),
               admin.getProfilePic(),
               admin.getPhoneNO(),
               admin.getAddress()
       );
    }

    public  static Admin mapToAdmin(AdminDto adminDto) {
        return new Admin(
                adminDto.getId(),
                adminDto.getFirstName(),
                adminDto.getLastName(),
                adminDto.getEmail(),
                adminDto.getPassword(),
                adminDto.getProfilePic(),
                adminDto.getPhoneNO(),
                adminDto.getAddress()
        );
    }
}
