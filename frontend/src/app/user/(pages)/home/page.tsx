'use client'

import UserSearchInput from "@/app/(components)/UserSearchInput";
import { User } from "@/types";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { userInfo } from "os";
import { useEffect, useState } from "react";




function Home() {

    const searchParams = useSearchParams();

    const getName = async () => {
      let id = searchParams ? searchParams.get('id') : null;
      if (!id) {
        id = JSON.parse(localStorage.getItem('userInfo')!).id;
      }
      const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/user/home/' + id);
      const json = await response.json();
      const userName = json.name;
      const userInfo: User = {
        name: userName,
        id: id!,
      };
      if (userInfo) {
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      }
    }

    useEffect(() => {
      getName();
    }, [])

    return (
    <>
    <main className="home">
      <div className="home__image"></div>

      <h2 className='welcome-title'>Välkommen <br /><span >{JSON.parse(localStorage.getItem('userInfo')!).name}</span></h2>

      <Link href="/user/userProfile" className="prefences"> Sätt dina preferenser </Link> 

        <UserSearchInput />
    </main>
    </>
    )
}
export default Home