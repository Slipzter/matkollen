'use client'

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");


    console.log('SEARCH PARAMS', encodedSearchQuery);

    return <div>SEARCH PAGE</div>
}

export default SearchPage;