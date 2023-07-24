import GuestSearchInput from "@/app/(components)/GuestSearchInput";
import Link from "next/link";

export default function Home() {
    return (
    <>
    <main className="home">
      <div className="home__image"></div>
        <GuestSearchInput />
    </main>
    </>
    )
}