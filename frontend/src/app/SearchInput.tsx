'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery);
        router.push(`/search?q=${encodedSearchQuery}`);
    };

    return (
        <form className="flex justify-center w-2/3" onSubmit={onSearch}>
        <input 
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        className="px-5 py-1 w2/3 sm:py-3 flex-1 text-zink-200 bg-zink-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
        placeholder="Vilken mat behöver du?"/>
        </form>
    )
};

export default SearchInput;