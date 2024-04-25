package com.cttorentsystem.ottorentbackend.mapper;

import com.cttorentsystem.ottorentbackend.dtos.InsuranceDetailsDto;
import com.cttorentsystem.ottorentbackend.entity.InsuranceDetails;

public class InsuranceDetailsMapper {

    public  static InsuranceDetails mapToInsuranceDetails(InsuranceDetailsDto insuranceDetailsDto) {

        return new InsuranceDetails(
                insuranceDetailsDto.getInsuranceDetailsId(),
                insuranceDetailsDto.getCoverageType(),
                insuranceDetailsDto.getCompanyName(),
                insuranceDetailsDto.getPolicyholderName(),
                insuranceDetailsDto.getCoveragePeriod(),
                insuranceDetailsDto.getVehicleDetails(),
                insuranceDetailsDto.getPremiumAmount(),
                insuranceDetailsDto.getPolicyExclusions(),
                insuranceDetailsDto.getRenewalDate(),
                insuranceDetailsDto.getContactNumber(),
                insuranceDetailsDto.getClaimProcess()

        );
    }


    public static  InsuranceDetailsDto mapToInsuranceDetailsDto(InsuranceDetails insuranceDetails) {

        return new InsuranceDetailsDto(
                insuranceDetails.getInsuranceDetailsId(),
                insuranceDetails.getCoverageType(),
                insuranceDetails.getCompanyName(),
                insuranceDetails.getPolicyholderName(),
                insuranceDetails.getCoveragePeriod(),
                insuranceDetails.getVehicleDetails(),
                insuranceDetails.getPremiumAmount(),
                insuranceDetails.getPolicyExclusions(),
                insuranceDetails.getRenewalDate(),
                insuranceDetails.getContactNumber(),
                insuranceDetails.getClaimProcess()
        );
    }
}
