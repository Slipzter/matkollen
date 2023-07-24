import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

type UserCard = {
  name: string,
  livsmedel: object,
}

const UserCard = (props : UserCard) => {
  return (
    <>
      <Link
      href={{
        pathname: '/user/productInfo',
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

export default UserCard