package com.cttorentsystem.ottorentbackend.repositorys;

import com.cttorentsystem.ottorentbackend.entity.ServiceDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceDetailsReporsitory extends JpaRepository<ServiceDetails, Long> {
}
