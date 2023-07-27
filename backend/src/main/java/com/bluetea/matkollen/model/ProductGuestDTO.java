package com.bluetea.matkollen.model;

public record ProductGuestDTO(

        String livsmedelsnamn,
        String energi_kcal,
        String fett_totalt_g,
        String protein_g,
        String kolhydrater_g,
        String livsmedelsnummer

) {
}
