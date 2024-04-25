package com.cttorentsystem.ottorentbackend.dtos;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String profilePic;
    private String phoneNO;
    private String address;

}
