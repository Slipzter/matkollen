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
  const query = searchParams.get('search');


  const getPhoto = async () => {
    const response = await fetch("https://pixabay.com/api/?key=38344200-772a9e460d5d47b78706a3b2d&q=" + query + " mat&image_type=photo&pretty=true&lang=sv");
    const imageData = await response.json();
    console.log(imageData);
    setImageURL(imageData.hits[4].webformatURL);
  }

  useEffect(() => {
    getPhoto();
  }, [])

  return (

    <div className="product-info">
      <img className="product-info__image" src={imageURL} alt="" />
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