'use client'
import Link from 'next/link'
import React from 'react'

const landing = () => {
  
  return (
    <>
      <div className='landing'>
      <div className='landing-background'>
      <Link href= "/team"><img className= 'logo-img' src="/bluetea-logo.png" alt="" /></Link>
        <div className='logo'>
        <h1 className='app-title'>MATKOLLEN</h1>
        </div>

      <div className='footer'>
        <Link className='login' href='https://blue-tea-matkollen-app.scm.azurewebsites.net/login'>
          Logga in
        </Link>
        <Link href={`/guest/home`} className='continue-link'>Fortsätt som gäst</Link>
      </div>
        </div>
        <h1>Matkollen</h1>
        <p>This is an awesome app</p>
      </div>
    </>
  )
}

export default landing