
export type Product =  {
    energi_kcal  : number,
    fett_totalt_g : number ,
    kolhydrater_g : number,
    livsmedelsnamn  : string,
    protein_g : number,
    searchQuery: string
}

export type Nutrient = {
    name: string,
    color: string,
    percentage: number,
}