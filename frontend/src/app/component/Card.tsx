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