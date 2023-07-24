import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

const GuestCard = (props : Product) => {
  return (
    <>
        <Link
        href={{
          pathname: '/guest/productInfo',
          query: {
            name: props.livsmedelsnamn,
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

export default GuestCard