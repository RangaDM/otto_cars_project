package com.cttorentsystem.ottorentbackend.mapper;

import com.cttorentsystem.ottorentbackend.dtos.LicenceDto;
import com.cttorentsystem.ottorentbackend.entity.Licence;

public class LicenceMapper {

     public  static LicenceDto mapToLicenceDto(Licence licence) {

         return new LicenceDto(
                 licence.getLicenceId(),
                 licence.getVehicleId(),
                 licence.getLicenseNumber(),
                 licence.getExpiryDate(),
                 licence.getIssueDate(),
                 licence.getIssueProvince()
         );
     }

     public  static  Licence mapToLicence(LicenceDto licenceDto) {

         return new Licence(
                 licenceDto.getLicenceId(),
                 licenceDto.getVehicleId(),
                 licenceDto.getLicenseNumber(),
                 licenceDto.getExpiryDate(),
                 licenceDto.getIssueDate(),
                 licenceDto.getIssueProvince()
         );
     }
}
