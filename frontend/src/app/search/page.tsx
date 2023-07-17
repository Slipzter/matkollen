"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");
    
    return <div>Search Page</div>
}

export default SearchPage;