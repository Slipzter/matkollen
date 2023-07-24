'use client'
import SearchInput from "@/app/component/SearchInput";
import Card from "@/app/component/Card";

function UserProfile(){




    return(
        <>
        <div className="user-container">
        <SearchInput />
         <h4>Welcome to Matkollen {} !</h4>
        </div> 
        <div>
            <Card energi_kcal={0} fett_totalt_g={0} kolhydrater_g={0} livsmedelsnamn={""} protein_g={0} searchQuery={""} />
        </div>
        </>
    )
}

export default UserProfile;