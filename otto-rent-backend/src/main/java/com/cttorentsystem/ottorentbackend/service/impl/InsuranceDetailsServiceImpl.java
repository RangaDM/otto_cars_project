package com.cttorentsystem.ottorentbackend.service.impl;

import com.cttorentsystem.ottorentbackend.dtos.InsuranceDetailsDto;
import com.cttorentsystem.ottorentbackend.entity.InsuranceDetails;
import com.cttorentsystem.ottorentbackend.mapper.InsuranceDetailsMapper;
import com.cttorentsystem.ottorentbackend.repositorys.InsuranceDetailsReporsitory;
import com.cttorentsystem.ottorentbackend.service.InsuranceDetailsService;
import lombok.AllArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class InsuranceDetailsServiceImpl implements InsuranceDetailsService {

    private InsuranceDetailsReporsitory insuranceDetailsReporsitory;
    @Override
    public InsuranceDetailsDto addInsuranceDetails(InsuranceDetailsDto insuranceDetailsDto) {

        InsuranceDetails insuranceDetails = InsuranceDetailsMapper.mapToInsuranceDetails(insuranceDetailsDto);

        InsuranceDetails savedInsuranceDetails = insuranceDetailsReporsitory.save(insuranceDetails);

        return InsuranceDetailsMapper.mapToInsuranceDetailsDto(savedInsuranceDetails);

    }
}
