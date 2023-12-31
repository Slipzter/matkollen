'use client'

import Link from "next/link";

const team = () =>{
    return(
        <>
            <div className="container-app">
                <h1>
                   ABOUT MATKOLLEN 
                </h1>
                <p>
                    In Sweden, health -conscinousness and a desire for informed food choices are on the rise.
                    Our app Matkollen address this growing need by providing a user-friendly platform that gives detailed nutrition information for various food products. <br />

                    Our unique idea lies in allowing the users to set their preferences, such as food allergies, diet conscious and dietary restrictions.
                    This means that if a user is allergic to certain ingredient or wants to avoid sugar, the app will flag food containing those items, empowering them to make healthier decisions effortlessely.

                    The app's key feature include a comprehensive food database with deatiled information on carbohydrates, fats and proteins. It also integrates with a localized Swedish food database to ensure the informaton is relevant and practical for users.
                </p>
                <br />
                <hr />
                <br />
                <h2 className="team-title">About Team</h2>
                <p>
                    We are called Blue-Tea team, dedicated three individuals who collaborated seamlessly to create this innovative app.
                    Each team member brought unique expertise and skills to the table, which made the development process highly efficient. 
                    Our combined efforts and passion for healthy eating culminated in Matkollen, a wonderful nutrition app 
                    that empowers users to make informed food choices. We are incredibly proud of our team's accomplishment and excited to share this app with you.
                    
                </p>

                <div className="card-team">
                <img src="su.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Sudha Madhuri Poojari</b></h5> 
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/sudhamadhuripoojari"}> Git hub</Link> 
                </div>
                </div>
                <div className="card-team">
                <img src="img1-modified.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Tim Hansson Meng</b></h5> 
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/Slipzter"}> Git hub</Link> 
                </div>
                </div>
                <div className="card-team">
                <img src="Ilija.png" alt="Avatar" className="avatar"/>
                <div className="container-team">
                    <h5><b>Ilija Krilovic</b></h5>          
                    <p>Full stack developer</p> 
                    <Link href={"https://github.com/ica1130"}> Git hub</Link> 
                </div>
                </div>
            </div>
        </>
    )
}
export default team;