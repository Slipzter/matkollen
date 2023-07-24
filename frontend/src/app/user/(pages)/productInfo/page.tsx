'use client'

import NutrientCard from "./NutrientCard"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";




function ProductInfoPage() {
  const [imageURL, setImageURL] = useState('');

  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const carbs = searchParams.get('carbs');
  const kcal = searchParams.get('kcal');
  const fat = searchParams.get('fat');
  const protein = searchParams.get('protein');


  const getGooglePhoto = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const searchEngineId = process.env.NEXT_PUBLIC_SE_ID;
    const response = await fetch("https://www.googleapis.com/customsearch/v1?q=" + name + "&cx=" + searchEngineId + "&key=" + apiKey + "&gl=se&hl=sv&searchType=image");
    const jsonData = await response.json();
    console.log(jsonData);
    setImageURL(jsonData.items[0].link);
  }

  useEffect(() => {
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
          <h2>{kcal} Kcal</h2>
        </article>
          <NutrientCard name={'Kålhydrater'} color={'blueviolet'} percentage={parseInt(carbs!)}/>
          <NutrientCard name={'Fett'} color={'orange'} percentage={parseInt(fat!)}/>
          <NutrientCard name={'Protein'} color={'red'} percentage={parseInt(protein!)}/>



          
      </section>
    </div>
  )
}

export default ProductInfoPage