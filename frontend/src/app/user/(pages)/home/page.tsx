'use client'

import UserSearchInput from "@/app/(components)/UserSearchInput";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";




function Home() {

    const searchParams = useSearchParams();

    const getName = async () => {
      const id = searchParams ? searchParams.get('id') : null;
      const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/user/home/' + id);
      const json = await response.json();
      const userName = json.name;
      if (userName) {
        localStorage.setItem("userName", userName);
      }
    }

    useEffect(() => {
      getName();
    }, [])

    return (
    <>
    <main className="home">
      <div className="home__image"></div>

      <h2 className='welcome-title'>Välkommen <br /><span >{localStorage.getItem('userName')}</span></h2>

      <Link href="/user/userProfile" className="prefences"> Sätt dina preferenser </Link> 

        <UserSearchInput />
    </main>
    </>
    )
}
export default Home