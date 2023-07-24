


import UserSearchInput from "@/app/(components)/UserSearchInput";

export default function Home() {

    return (
    <>
    <main className="home">
      <div className="home__image"></div>
      <h2>Welcome User {}</h2>
      <a href="/user/userProfile" className="prefences"> Set your prefences </a>
        <UserSearchInput />
    </main>
    </>
    )
}