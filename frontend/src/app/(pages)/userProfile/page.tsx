'use client'
import SearchInput from "@/app/component/SearchInput";
import { useEffect, useState } from "react";

function UserProfile(){
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [currentOption, setCurrentOption] = useState<string>("");

  
    useEffect(()=> {
        const storedOptions = JSON.parse(localStorage.getItem("selectedOptions")) as string[] | null;
        if(storedOptions){
            setSelectedOptions(storedOptions)
        }
    }, []);

    useEffect(()=>{
       localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions))
    }, [selectedOptions]);

    const handleOptionChange = (e: any) =>{
        setCurrentOption(e.target.value)
        console.log("Added",e.target.value )
    }

    const handleAddOption = ()=>{
        if (currentOption && !selectedOptions.includes(currentOption)) {
            setSelectedOptions([...selectedOptions, currentOption]);
            setCurrentOption("");
          }
    };

    return(
        <>
        <div className="user-container">
        <SearchInput />
         <h4>Välkommen till Matkollen {} !</h4>
        </div> 
        <div className="select-options">
        <select name="preferences" className="options" value={currentOption} onChange={handleOptionChange} >
            <option value="">Välj</option>
            <option value="fiber">Fiber</option>
            <option value="vatten">Vatten</option>
            <option value="alcohol">Alcohol</option>
            <option value="aska">Aska</option>
            <option value="sockerarter">Sockerarter</option>
            <option value="kalcium">Kalcium</option>
            <option value="iron">Iron</option>
        </select>
        <button className="add" id = "addButton" onClick = {handleAddOption}>Lägg till</button>
        </div>
    </>
    )
}

export default UserProfile;