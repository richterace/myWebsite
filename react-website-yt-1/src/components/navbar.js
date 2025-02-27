import React, {useState} from 'react'

function navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" > 
            ACE
            </Link>
        </div>
      </nav>
    </>
  )
}

export default navbar
