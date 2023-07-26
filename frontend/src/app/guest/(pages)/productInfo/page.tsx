'use client'

import { Livsmedel } from "@/types";
import NutrientCard from "./NutrientCard"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



function ProductInfoPage() {
  const [imageURL, setImageURL] = useState('');
  const [productData, setProductData] = useState<Livsmedel>();

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const getData = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_DOMAIN +'/guest/product/' + name);
    const data = await response.json();
    console.log(data);
    setProductData(data);
  }


  const getGooglePhoto = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const searchEngineId = process.env.NEXT_PUBLIC_SE_ID;
    const response = await fetch("https://www.googleapis.com/customsearch/v1?q=" 
      + name + "&cx=" + searchEngineId + "&key=" + apiKey + "&gl=se&hl=sv&searchType=image");
    const jsonData = await response.json();
    console.log(jsonData);
    setImageURL(jsonData.items[0].link);
  }

  useEffect(() => {
    getData();
    getGooglePhoto();
  }, [])

  if (productData) {

  return (

    <div className="product-info">
      <div className="product-info__image__container">
        <img className="product-info__image" src={imageURL} alt="" />
      </div>
      <h1 className="product-info__title">{name}</h1>
      <section className="product-info__card-section">
        <article className="card product-info__energy-card">
          <h3>Energi per 100g</h3>
          <h2>{productData.energi_kcal} Kcal</h2>
        </article>
          <NutrientCard name={'Kolhydrater'} color={'blueviolet'} percentage={parseInt(productData.kolhydrater_g)}/>
          <NutrientCard name={'Fett'} color={'orange'} percentage={parseInt(productData.fett_totalt_g)}/>
          <NutrientCard name={'Protein'} color={'green'} percentage={parseInt(productData.protein_g)}/>
      </section>
      </div>
  )
}
else return <p>Loading...</p>
}

export default ProductInfoPage 