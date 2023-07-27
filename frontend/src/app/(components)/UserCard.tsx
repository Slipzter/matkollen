import React from 'react'
import { Product } from "@/types";
import Link from 'next/link';

type UserCard = {
  name: string,
  livsmedel: object,
  id: string | undefined,
  flag?: string,
}

const UserCard = (props : UserCard) => {
  return (
    <>
      <Link
      href={{
        pathname: '/user/productInfo',
        query: {
          id: props.id,
          name: props.name,
        }
      }}
      passHref
      className ='card-product-link'
      >
        <div className='card'>
          {props.name} {props.flag ? <i className="fa fa-exclamation-circle flag" aria-hidden="true"></i> : ''}
        </div>
        </Link>
    </>
  )
}

export default UserCard