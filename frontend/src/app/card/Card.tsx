import React from 'react'
import { Product } from "@/types";

const Card = (props : Product) => {
  return (
      <div>
        <h4>{props.livsmedelsnamn}</h4>
      </div>

    )
}

export default Card