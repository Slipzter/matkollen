'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Card from "../component/Card";

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
    <img src="pic1.png" alt="" />  
            <div>
            {products.map((product: Product, index: number)=>{
                return (
                    <div key={index}>
                        <Card  livsmedelsnamn={product.livsmedelsnamn} />
                    </div>
                )
            })}
            </div>
        </>
        )
}

export default SearchPage;