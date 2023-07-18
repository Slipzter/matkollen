import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

const Card = (props : Product) => {
  return (
    <>
        <Link
        href={{
          pathname: '/productnamn',
          query: {
            search: `${props.livsmedelsnamn}`
          }
        }}
        passHref
        // as ="script"
        className ='card-product-link'
        >
          <div className='search-result-card'>
          {props.livsmedelsnamn}
          </div>
          </Link>
      </>

    )
}

export default Card