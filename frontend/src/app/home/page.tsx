import Link from "next/link";
import SearchInput from "../SearchInput";

export default function Home() {
    return (
    <>
    <nav className="sticy top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
            <Link href="/landingpage">Back</Link>
        </ul>
    </nav>
    <main>
        <SearchInput />
    </main>
    </>
    )
}