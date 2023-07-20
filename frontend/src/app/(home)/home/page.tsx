import SearchInput from "@/app/component/SearchInput";
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