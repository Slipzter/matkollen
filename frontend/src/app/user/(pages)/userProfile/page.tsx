'use client'
import { Pair } from "@/types";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";

function UserProfile(){
    const [selectedItems, setSelectedItems] = useState<{}[]>([{}]);
    const [currentItem, setCurrentItem] = useState<Pair>();

    useEffect(()=> {
        const storedOptions: [] = JSON.parse(localStorage.getItem("arrayOfItems") as any);
        if(storedOptions){
            setSelectedItems(storedOptions);
            console.log("Stored: ", storedOptions)
        }
    }, []);

    useEffect(()=>{
        if(Object.keys(selectedItems).length > 0){
        localStorage.setItem("arrayOfItems", JSON.stringify(selectedItems))
   }
    }, [selectedItems]);

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const value = e.target.value;
        const text = e.target.selectedOptions[0].textContent as string;
        const object: Pair = {value, text};
        console.log('selected items: ', selectedItems);
        setCurrentItem(object);
    }

    const handleAddOption = ()=>{
        if (selectedItems && currentItem?.value && !selectedItems.find((element: any) => element.value === currentItem.value)) {
            setSelectedItems([...selectedItems, currentItem]);
            setCurrentItem(undefined);
        }
    };


    return (
        <>
        <div className="user-container">
         <h2 className="welcome-page">Matkollen!</h2>
         <label htmlFor="nutrients" className="label">Välj nedan och lägg till:</label> 
        </div>
        <div className="select-options">
        <select id="dropdown" name="preferences" className="options" value={currentItem?.value} onChange={handleOptionChange} >
            <option>Välj</option>
            <option value="alkohol_g">Alkohol (g)</option>
            <option value="arakidinsyra_g">Arakidinsyra (g)</option>
            <option value="arakidonsyra_g">Arakidonsyra (g)</option>
            <option value="aska_g">Aska (g)</option>
            <option value="avfall">Avfall (μg)</option>
            <option value="betakaroten">Betakaroten (μg)</option>
            <option value="dha_g">DHA (g)</option>
            <option value="disackarider_g">Disackarider (g)</option>
            <option value="dpa_g">DPA (g)</option>
            <option value="energi_kj">Energi (Kj)</option>
            <option value="epa_g">EPA (g)</option>
            <option value="fettsyra_g">Fettsyra (g)</option>
            <option value="fibrer_g">Fibrer (g)</option>
            <option value="folat">Folat (μg)</option>
            <option value="fosfor_mg">Fosfor (mg)</option>
            <option value="fritt_socker_g">Fritt Socker (g)</option>
            <option value="fullkorn_totalt_g">Fullkorn Totalt (g)</option>
            <option value="jod">Jod (μg)</option>
            <option value="järn_mg">Järn (mg)</option>
            <option value="kalcium_mg">Kalcium (mg)</option>
            <option value="kalium_mg">Kalium (mg)</option>
            <option value="kolesterol_mg">Kolesterol (mg)</option>
            <option value="laurinsyra_g">Laurinsyra (g)</option>
            <option value="linolensyra_g">Linolensyra (g)</option>
            <option value="linolsyra_g">Linolsyra (g)</option>
            <option value="magnesium_mg">Magnesium (mg)</option>
            <option value="monosackarider_g">Monosackarider (g)</option>
            <option value="myristinsyra_g">Myristinsyra (g)</option>
            <option value="natrium_mg">Natrium (mg)</option>
            <option value="niacin_mg">Niacin (mg)</option>
            <option value="niacinekvivalenter">Niacinekvivalenter</option>
            <option value="oljesyra_g">Oljesyra (g)</option>
            <option value="palmitinsyra_g">Palmitinsyra (g)</option>
            <option value="palmitoljesyra_g">Palmitoljesyra (g)</option>
            <option value="retinol">Retinol (μg)</option>
            <option value="riboflavin_mg">Riboflavin (mg)</option>
            <option value="salt_g">Salt (g)</option>
            <option value="selen">Selen (μg)</option>
            <option value="sockerarter_g">Sockerarter (g)</option>
            <option value="stearinsyra_g">Stearinsyra (g)</option>
            <option value="summa_enkelomättade_fettsyror_g">Summa Enkelomättade Fettsyror (g)</option>
            <option value="summa_fleromättade_fettsyror_g">Summa Fleromättade Fettsyror (g)</option>
            <option value="summa_mättade_fettsyror_g">Summa Mättade Fettsyror (g)</option>
            <option value="tiamin_mg">Tiamin (mg)</option>
            <option value="tillsatt_socker_g:">Tillsatt Socker (g)</option>
            <option value="vatten_g">Vatten (g)</option>
            <option value="vitamin_a">A-vitamin (μg)</option>
            <option value="vitamin_b6:">B6-vitamin (μg)</option>
            <option value="vitamin_b12">B12-vitamin (μg)</option>
            <option value="vitamin_c">C-vitamin (μg)</option>
            <option value="vitamin_d">D-vitamin (μg)</option>
            <option value="vitamin_e">E-vitamin (μg)</option>
            <option value="vitamin_k">K-vitamin (μg)</option>
            <option value="zink_mg">Zink (mg)</option>
        </select>
            <button className="add" id = "addButton" onClick = {handleAddOption}>Lägg till</button>
        </div>
        <div>
        <h3>Selected Options in UserProfile: </h3>
        <ul>
        {selectedItems.map((item: any, index) => (      
            (<li key={index}>{item.text}</li>)
            ))}
        </ul>
      </div>
    </>
    )
}

export default UserProfile;

