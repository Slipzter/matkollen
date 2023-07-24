'use client'

import NutrientCard from "./NutrientCard"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";




function ProductInfoPage() {
  const [imageURL, setImageURL] = useState('');
  const [productData, setProductData] = useState<any>([]);

  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const getData = async () => {
    const response = await fetch('http://localhost:8080/user/product/' + name);
    const data = await response.json();
    const dataEntries: string[][] = Object.entries(data);
    console.log(data);
    setProductData(dataEntries);
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

  return (

    <div className="product-info">
      <div className="product-info__image__container">
        <img className="product-info__image" src={imageURL} alt="" />
      </div>
      <h1 className="product-info__title">{name}</h1>
      <section className="product-info__card-section">
        <article className="card product-info__energy-card">
          <h3>Energi per 100g</h3>
          <h2>{} Kcal</h2>
        </article>
          <NutrientCard name={'Kålhydrater'} color={'blueviolet'} percentage={1}/>
          <NutrientCard name={'Fett'} color={'orange'} percentage={1}/>
          <NutrientCard name={'Protein'} color={'red'} percentage={1}/>

       {
          productData.map((entry: string[]) => {
            return <p>{entry[0]}: {entry[1]}</p>
          })}
      </section>
    </div>
  )
}

export default ProductInfoPage