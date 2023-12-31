export type User = {
    id: string,
    name: string,
    email: string,
}

export type Product =  {
    energi_kcal: number,
    fett_totalt_g: number,
    kolhydrater_g: number,
    livsmedelsnamn: string,
    protein_g: number,
    searchQuery?: string,
    livsmedelsnummer: string,
}

export type Nutrient = {
    name: string,
    color: string,
    percentage: number,
}

export type Livsmedel = {
    alkohol_g: string, 
    arakidinsyra_g:string,
    arakidonsyra_g : string,
    aska_g:string,
    avfall:string,
    betakaroten:string
    dha_g:string
    disackarider_g:string
    dpa_g:string,
    energi_kcal:string,
    energi_kj: string,
    epa_g: string,
    fett_totalt_g: string,
    fettsyra_g: string,
    fibrer_g: string,
    folat: string,
    fosfor_mg: string,
    fritt_socker_g: string,
    fullkorn_totalt_g: string,

    gruppering?: string,

    jod: string,
    järn_mg: string,
    kalcium_mg: string,
    kalium_mg: string,
    kolesterol_mg: string,
    kolhydrater_g: string,
    laurinsyra_g: string,
    linolensyra_g: string,
    linolsyra_g: string,
    [livsmedelsnamn: string]: any,

    livsmedelsnummer?: string,
    
    magnesium_mg: string,
    monosackarider_g: string,
    myristinsyra_g: string,
    natrium_mg: string,
    niacin_mg: string,
    niacinekvivalenter: string,
    oljesyra_g: string,
    palmitinsyra_g: string,
    palmitoljesyra_g: string,
    protein_g: string,
    retinol: string,
    riboflavin_mg: string,
    salt_g: string,
    selen: string,
    sockerarter_g: string,
    stearinsyra_g: string,
    summa_enkelomättade_fettsyror_g: string,
    summa_fleromättade_fettsyror_g: string,
    summa_mättade_fettsyror_g: string,
    tiamin_mg: string,
    tillsatt_socker_g: string,
    vatten_g: string,
    vitamin_a: string,
    vitamin_b6: string,
    vitamin_b12: string,
    vitamin_c: string,
    vitamin_d: string,
    vitamin_e: string,
    vitamin_k: string,
    zink_mg: string, 
}

export type Pair = {
    value: string,
    text: string,
}