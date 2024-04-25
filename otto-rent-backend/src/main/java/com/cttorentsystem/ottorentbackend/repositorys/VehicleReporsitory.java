package com.cttorentsystem.ottorentbackend.repositorys;

import com.cttorentsystem.ottorentbackend.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VehicleReporsitory extends JpaRepository<Vehicle, Long> {

    @Query("SELECT v FROM Vehicle v WHERE v.seatingCapacity >= :seatingCapacity AND v.fuelType = :fuelType AND v.vehicleType = :vehicleType")
    List<Vehicle> findBySuggestVehicle(@Param("seatingCapacity") int seatingCapacity, @Param("fuelType") Vehicle.FuelType fuelType, @Param("vehicleType") Vehicle.VehicleType vehicleType);
}
