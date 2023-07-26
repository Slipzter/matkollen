import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

type UserCard = {
  name: string,
  livsmedel: object,
  flag?: string,
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
          {props.name} {props.flag ? 'FLAGGED' : ''}
        </div>
        </Link>
    </>
  )
}

export default UserCard