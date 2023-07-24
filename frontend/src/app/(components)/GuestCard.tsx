import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

type GuestCard = {
  name: string,
}

const GuestCard = (props : GuestCard) => {
  return (
    <>
        <Link
        href={{
          pathname: '/guest/productInfo',
          query: {
            name: props.name,
          }
        }}
        passHref
        className ='card-product-link'
        >
          <div className='card'>
            {props.name}
          </div>
          </Link>
      </>

    )
}

export default GuestCard