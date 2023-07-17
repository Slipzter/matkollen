'use client'
import Link from 'next/link'
import React from 'react'

const landingPage = () => {

  const handleSearch = () => {
    
  }
  
  return (
    <>
      <div className='landing'>
        <div className='logo'>
          <img className= 'logo-img' src="/logo.png" alt="" />
        </div>
        <h1>MATKOLLEN</h1>
      <div className='footer'>
      <button className='login' onClick={handleSearch}>
        Login
      </button>
        <Link href={`/homepage`} className='continue-link'>Continue without registration</Link>
      </div>
      </div>
    </>
  )
}

export default landingPage