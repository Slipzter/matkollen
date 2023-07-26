import { cookies } from 'next/headers'
import UserSearchInput from "@/app/(components)/UserSearchInput";

const getName = async () => {
  const cookieStore = cookies()
  const id = cookieStore.get("userId")?.value
  const response = await fetch('http://localhost:8080/user/home/' + id);
  const json = await response.json();
  return json.name;
}

async function Home() {

    const name = await getName();

    return (
    <>
    <main className="home">
      <div className="home__image"></div>
      <h2 className='welcome-title'>Välkommen <br /><span >{name}</span></h2>
      <a href="/user/userProfile" className="prefences"> Ange dina preferenser </a>
        <UserSearchInput />
    </main>
    </>
    )
}

export default Home