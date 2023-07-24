'use client'
import Link from 'next/link'
import React from 'react'

const landing = () => {
  
  return (
    <>
      <div className='landing'>
      <div className='landing-background'>
      <img className= 'logo-img' src="/bluetea-logo.png" alt="" />
        <div className='logo'>
        <h1 className='app-title'>MATKOLLEN</h1>
        </div>

      <div className='footer'>
        <Link className='login' href='http://localhost:8080/login'>
          Logga in
        </Link>
        <Link href={`/guest/home`} className='continue-link'>Fortsätt som gäst</Link>
      </div>
        </div>
      </div>
    </>
  )
}

export default landing