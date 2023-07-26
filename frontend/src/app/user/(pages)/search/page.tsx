'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Livsmedel } from "@/types";

import Link from "next/link";
import UserCard from "@/app/(components)/UserCard";

function SearchPage() {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "");
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [selectedItems, setSelectedItems] = useState<{}[]>([{}]);

    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8080/user/search/" + encodedSearchQuery)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Product not found");
            }
            return res.json();
        })
        .then((data) => {
            console.log('DATA HERE: ', data);
            setProducts(data);
            setLoading(false);
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
          setProducts([]);
          setLoading(false);
      });
    }, [])

    useEffect(()=> {
      const storedOptions: [] = JSON.parse(localStorage.getItem("arrayOfItems") as any);
      if(storedOptions){
          setSelectedItems(storedOptions);
          console.log("Stored: ", storedOptions)
      }
    }, []);

    if (isLoading) return <p>Loading..</p>
    if (!products || products.length === 0) return (

            <div className="page_not_found">
                    <h1>404</h1>
                    <h3>Produkten hittades inte</h3>
                        <div className="not_found_error card">
                    <Link href="/user/home"><p>Sök igen...</p></Link>
                </div>
            </div>
      )
    return (
    <>  
        <div className="search-page">
         <img src="/food2.jpg" alt="food" className="search-img" /> 
        </div> 
            <div>
            {
            
            products.map((product: Livsmedel, index: number)=>{
              const localStorageValue: string = selectedItems[1].value;
              const modified = localStorageValue.split(':').join('');
                if (product[modified] > 0) {
                  return (
                    <div className="search-card-container" key={index}>
                       <UserCard flag={'true'} name={product.livsmedelsnamn} livsmedel={product} />
                    </div>
                  )
                } else {
                  return (
                    <div className="search-card-container" key={index}>
                        <UserCard name={product.livsmedelsnamn} livsmedel={product} />
                    </div>
                )
                }

            })}
            </div> 
        </>
        )
    }

export default SearchPage;