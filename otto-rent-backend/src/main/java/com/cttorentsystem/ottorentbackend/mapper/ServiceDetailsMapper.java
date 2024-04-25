package com.cttorentsystem.ottorentbackend.mapper;

import com.cttorentsystem.ottorentbackend.dtos.ServiceDetailsDto;
import com.cttorentsystem.ottorentbackend.entity.ChangedPart;
import com.cttorentsystem.ottorentbackend.entity.ServiceDetails;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;


public class ServiceDetailsMapper {

    public  static ServiceDetails mapToServiceDetails(ServiceDetailsDto serviceDetailsDto) {

        return new ServiceDetails(
                serviceDetailsDto.getServiceDetailsId(),
                serviceDetailsDto.getServiceDate(),
                serviceDetailsDto.getServiceCenterName(),
                serviceDetailsDto.getServiceCenterLocation(),
                serviceDetailsDto.getTravelDistance(),
                serviceDetailsDto.getServiceCost(),
                serviceDetailsDto.getVehicleId(),
                serviceDetailsDto.getChangedParts(),
                serviceDetailsDto.getDriverName(),
                serviceDetailsDto.getDriverPhone(),
                serviceDetailsDto.getNextServiceDate(),
                serviceDetailsDto.getNextServiceDistance()

        );

    }


    public  static  ServiceDetailsDto mapToServiceDetailsDto(ServiceDetails serviceDetails) {

        return new ServiceDetailsDto(
                serviceDetails.getServiceDetailsId(),
                serviceDetails.getServiceDate(),
                serviceDetails.getServiceCenterName(),
                serviceDetails.getServiceCenterLocation(),
                serviceDetails.getTravelDistance(),
                serviceDetails.getServiceCost(),
                serviceDetails.getVehicleId(),
                serviceDetails.getChangedParts(),
                serviceDetails.getDriverName(),
                serviceDetails.getDriverPhone(),
                serviceDetails.getNextServiceDate(),
                serviceDetails.getNextServiceDistance()

        );
    }
}
