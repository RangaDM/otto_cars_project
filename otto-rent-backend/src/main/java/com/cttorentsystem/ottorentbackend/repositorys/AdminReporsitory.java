package com.cttorentsystem.ottorentbackend.repositorys;

import com.cttorentsystem.ottorentbackend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminReporsitory extends JpaRepository<Admin, Long> {
}
