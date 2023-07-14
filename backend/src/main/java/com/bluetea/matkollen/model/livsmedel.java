package com.bluetea.matkollen.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class livsmedel {
    private String livsmedelsnamn;
    @Id
    private String livsmedelsnummer;
    private String gruppering;
    private String energi_kcal;
    private String energi_kj;
    private String fett_totalt_g;
    private String protein_g;
    private String kolhydrater_g;
    private String fibrer_g;
    private String vatten_g;
    private String alkohol_g;
    private String aska_g;
    private String sockerarter_g;
    private String monosackarider_g;
    private String disackarider_g;
    private String tillsatt_socker_g;
    private String fritt_socker_g;
    private String fullkorn_totalt_g;
    private String summa_mättade_fettsyror_g;
    private String fettsyra_g;
    private String laurinsyra_g;
    private String myristinsyra_g;
    private String palmitinsyra_g;
    private String stearinsyra_g;
    private String arakidinsyra_g;
    private String summa_enkelomättade_fettsyror_g;
    private String palmitoljesyra_g;
    private String oljesyra_g;
    private String summa_fleromättade_fettsyror_g;
    private String linolsyra_g;
    private String linolensyra_g;
    private String arakidonsyra_g;
    private String epa_g;
    private String dpa_g;
    private String dha_g;
    private String kolesterol_mg;
    private String vitamin_a;
    private String retinol;
    private String betakaroten;
    private String vitamin_d;
    private String vitamin_e;
    private String vitamin_k;
    private String tiamin_mg;
    private String riboflavin_mg;
    private String niacin_mg;
    private String niacinekvivalenter;
    private String vitamin_b6;
    private String folat;
    private String vitamin_b12;
    private String vitamin_c;
    private String fosfor_mg;
    private String jod;
    private String järn_mg;
    private String kalcium_mg;
    private String kalium_mg;
    private String magnesium_mg;
    private String natrium_mg;
    private String salt_g;
    private String selen;
    private String zink_mg;
    private String avfall;
}
