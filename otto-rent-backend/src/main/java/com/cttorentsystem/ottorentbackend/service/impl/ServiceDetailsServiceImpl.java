package com.cttorentsystem.ottorentbackend.service.impl;

import com.cttorentsystem.ottorentbackend.dtos.ServiceDetailsDto;
import com.cttorentsystem.ottorentbackend.entity.ServiceDetails;
import com.cttorentsystem.ottorentbackend.mapper.ServiceDetailsMapper;
import com.cttorentsystem.ottorentbackend.repositorys.ServiceDetailsReporsitory;
import com.cttorentsystem.ottorentbackend.service.ServiceDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class ServiceDetailsServiceImpl implements ServiceDetailsService {

    private ServiceDetailsReporsitory serviceDetailsReporsitory;
    @Override
    public ServiceDetailsDto createServiceDetails(ServiceDetailsDto serviceDetailsDto) {

        ServiceDetails newserviceDetails = ServiceDetailsMapper.mapToServiceDetails(serviceDetailsDto);

        ServiceDetails savedServiceDetails = serviceDetailsReporsitory.save(newserviceDetails);
        return ServiceDetailsMapper.mapToServiceDetailsDto(savedServiceDetails);
    }
}
