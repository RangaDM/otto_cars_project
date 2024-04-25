package com.cttorentsystem.ottorentbackend.dtos;

import com.cttorentsystem.ottorentbackend.entity.ChangedPart;
import com.cttorentsystem.ottorentbackend.entity.Vehicle;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceDetailsDto {

    private Long serviceDetailsId;
    private Date serviceDate;
    private String serviceCenterName;
    private String serviceCenterLocation;
    private  String travelDistance;
    private  String serviceCost;
    private Vehicle vehicleId;
    private List<ChangedPart> changedParts = new ArrayList<>();
    private String driverName;
    private String driverPhone;
    private String nextServiceDate;
    private  String nextServiceDistance;







}
