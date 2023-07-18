import React from 'react'
import { Product } from "@/types";

const Card = (props : Product) => {
  return (
      <div className='search-result-card'>
        <h4>{props.livsmedelsnamn}</h4>
      </div>

    )
}

export default Card