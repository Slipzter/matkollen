import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

const Card = (props : Product) => {
  return (
    <>
        <Link
        href={{
          pathname: '/productInfo',
          query: {
            name: props.livsmedelsnamn,
            carbs: props.kolhydrater_g,
            fat: props.fett_totalt_g,
            protein: props.protein_g,
            kcal: props.energi_kcal,
            search: props.searchQuery
          }
        }}
        passHref
        className ='card-product-link'
        >
          <div className='card'>
            {props.livsmedelsnamn}
          </div>
          </Link>
      </>

    )
}

export default Card