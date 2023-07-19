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

}, []);
    return (
    <>   
        <div>
         <img src="https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg" alt="" className="search-img"  /> 
        </div> 
            <div>
            {products.map((product: Product, index: number)=>{
                return (
                    <div key={index}>
                        <Card searchQuery={encodedSearchQuery} livsmedelsnamn={product.livsmedelsnamn} energi_kcal={product.energi_kcal} fett_totalt_g={product.fett_totalt_g} kolhydrater_g={product.kolhydrater_g} protein_g={product.protein_g}/>
                    </div>
                )
            })}
            </div>
        </>
        )
}

export default SearchPage;