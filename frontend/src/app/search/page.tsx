'use client'

import { useSearchParams } from "next/navigation";



const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");

    async function getProducts() {
    const response = await fetch("http://localhost:8080/search/" + encodedSearchQuery);
    const products = await response.json();
    console.log(products);
    }
    getProducts();
    console.log('SEARCH PARAMS', encodedSearchQuery);

    return <>
        <div className='search-result-card'>
        <h3>Search result </h3>
        <p>Something should be here</p>
        </div>
            </>
}

export default SearchPage;