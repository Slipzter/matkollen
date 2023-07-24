
import UserSearchInput from "@/app/(components)/UserSearchInput";
import Link from "next/link";

export default function Home() {
    return (
    <>
    <main className="home">
      <div className="home__image"></div>
        <UserSearchInput />
    </main>
    </>
    )
}