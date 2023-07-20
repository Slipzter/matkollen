'use client'
import Link from 'next/link'
import React from 'react'

const landing = () => {

  const handleSearch = () => {
    
  }
  
  return (
    <>
      <div className='landing'>
      <div className='landing-background'>
      <img className= 'logo-img' src="/bluetea-logo.png" alt="" />
        <div className='logo'>
        {/* <img className= 'logo-img' src="/logo.png" alt="" /> */}
        <h1 className='app-title'>MATKOLLEN</h1>
        </div>

      <div className='footer'>
        <button className='login' onClick={handleSearch}>
          Logga in
        </button>
        <Link href={`/home`} className='continue-link'>Fortsätt som gäst</Link>
      </div>
        </div>
      </div>
    </>
  )
}

export default landing