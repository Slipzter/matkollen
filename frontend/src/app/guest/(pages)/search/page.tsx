'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";
import GuestCard from "@/app/(components)/GuestCard";

function SearchPage() {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(process.env.NEXT_PUBLIC_DOMAIN + "/guest/search/" + encodedSearchQuery)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Product not found");
            }
            return res.json();
        })
        .then((data) => {
            setProducts(data);
            setLoading(false);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        setProducts([]);
        setLoading(false);
    });
}, [])

    if (isLoading) return <p>Loading..</p>
    if (!products || products.length === 0) return (

            <div className="page_not_found">
                    <h1>404</h1>
                    <h3>Produkten hittades inte</h3>
                <div className="not_found_error card">
                    <Link href="/guest/home"><p>Sök igen...</p></Link>
                </div>
            </div>
    )
    return (
    <>   
        <div className="search-page">
         <img src="https://source.unsplash.com/random/1920x1080/?grocery" width="100%" alt="food" className="search-img" /> 
        </div> 
            <div className="search-cards">
            {products.map((product: Product, index: number)=>{
              console.log(product.livsmedelsnummer)
                return (
                    <div className="search-card-container" key={index}>
                        <GuestCard name={product.livsmedelsnamn} id={product.livsmedelsnummer}/>
                    </div>
                )
            })}
            </div> 
        </>
        )
    }

export default SearchPage;