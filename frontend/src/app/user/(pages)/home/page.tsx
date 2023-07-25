


import UserSearchInput from "@/app/(components)/UserSearchInput";
import Link from "next/link";

export default function Home() {

    return (
    <>
    <main className="home">
      <div className="home__image"></div>
      <h2>Welcome User {}</h2>
      <Link href="/user/userProfile" className="prefences"> Set your prefences </Link>
        <UserSearchInput />
    </main>
    </>
    )
}