'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Card from "../card/card";

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    async function getProducts() {
    const response = await fetch("http://localhost:8080/search/" + encodedSearchQuery);
    const products = await response.json();
    setProducts(products);
    console.log(products);
    }
    getProducts();

   console.log('SEARCH PARAMS', encodedSearchQuery);
}, []);
    return (
    <>      
            <h3>Search result </h3>
            <div className='search-result-card'>
           
            {products.map((product: Product, index: number)=>{
                return (
                    <div>
                        <Card key={index} livsmedelsnamn={product.livsmedelsnamn} />
                    </div>
                )
            })}
            </div>
        </>
        )
}

export default SearchPage;