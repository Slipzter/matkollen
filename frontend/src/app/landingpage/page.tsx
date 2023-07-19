'use client'
import Link from 'next/link'
import React from 'react'

const landing = () => {

  const handleSearch = () => {
    
  }
  
  return (
    <>
      <div className='landing'>
        <div className='logo'>
          <img className= 'logo-img' src="/logo.png" alt="" />
        </div>
      <div className='footer'>
        <button className='login' onClick={handleSearch}>
          Logga in
        </button>
        <Link href={`/home`} className='continue-link'>Fortsätt som gäst</Link>
      </div>
      </div>
    </>
  )
}

export default landing