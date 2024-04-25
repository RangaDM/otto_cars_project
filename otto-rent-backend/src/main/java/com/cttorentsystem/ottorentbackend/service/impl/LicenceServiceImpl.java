package com.cttorentsystem.ottorentbackend.service.impl;

import com.cttorentsystem.ottorentbackend.dtos.LicenceDto;
import com.cttorentsystem.ottorentbackend.entity.Licence;
import com.cttorentsystem.ottorentbackend.mapper.LicenceMapper;
import com.cttorentsystem.ottorentbackend.repositorys.LicenceRepository;
import com.cttorentsystem.ottorentbackend.service.LicenceService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class LicenceServiceImpl implements LicenceService {

    private LicenceRepository licenceRepository;

    @Override
    public LicenceDto createLicence(LicenceDto licenceDto) {

        Licence updateLicence = LicenceMapper.mapToLicence( licenceDto);

        Licence saveLicence = licenceRepository.save(updateLicence);

        return LicenceMapper.mapToLicenceDto(saveLicence);


    }
}
