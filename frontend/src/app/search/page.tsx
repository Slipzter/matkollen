'use client'

import { useSearchParams } from "next/navigation";
import useSWR from 'swr';

const fetchProducts = async (url: string) => {
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return response.json();
}

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");

    const { data, isLoading } = useSWR(
        `/api/search?q=${encodedSearchQuery}`,
        fetchProducts
    );


    console.log('SEARCH PARAMS', encodedSearchQuery);

    return <div>SEARCH PAGE</div>
}

export default SearchPage;