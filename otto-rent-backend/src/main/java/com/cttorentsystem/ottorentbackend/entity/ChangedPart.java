package com.cttorentsystem.ottorentbackend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "changed_part")
public class ChangedPart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long changedPartId;
    private String changedPartName;
    private String changedPartPrice;
    private String changedPartDescription;
}
