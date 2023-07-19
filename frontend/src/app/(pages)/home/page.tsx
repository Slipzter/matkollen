import SearchInput from "@/app/SearchInput";
import Link from "next/link";

export default function Home() {
    return (
    <>
    <main className="home">
      <div className="home__image"></div>
        <SearchInput />
    </main>
    </>
    )
}