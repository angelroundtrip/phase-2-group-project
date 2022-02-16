import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
  
      <Link to='/'>
        <button className='navbutton'> All Entries </button>
      </Link>

    <p>
      <Link to='about'>
        <button className='navbutton'> About </button>
      </Link>
    </p>
     
    </div>
  )
}

export default NavBar