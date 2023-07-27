
import UserSearchInput from "@/app/(components)/UserSearchInput";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


const getName = async () => {
  const searchParams = useSearchParams();
  const id = searchParams ? searchParams.get('id') : null;
  const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/user/home/' + id);
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
export default Home