import { cookies } from 'next/headers'
import UserSearchInput from "@/app/(components)/UserSearchInput";
import Link from 'next/link';

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

      <h2>Welcome {name}</h2>
      <Link href="/user/userProfile" className="prefences"> Set your prefences </Link> 

        <UserSearchInput />
    </main>
    </>
    )
}

// export async function getServerSideProps() {

//   const cookieStore = cookies()
//   const id = cookieStore.get("userId")?.value
//   const res = await fetch('http://localhost:8080/user/home/' + id)
//   const data = await res.json()
//   console.log(data)
 
//   // Pass data to the page via props
//   return { props: { data } }
// }

export default Home