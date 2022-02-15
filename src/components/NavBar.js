import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>NavBar
      <ul>
        <button>
          <Link to='/'>Entries</Link>
        </button>
      </ul>

      <ul>
        <button>
          <Link to='about'>About</Link>
        </button>
      </ul>
    </div>
  )
}

export default NavBar