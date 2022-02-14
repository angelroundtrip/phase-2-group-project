import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import JournalEntries from './JournalEntries'

function NavBar() {
  return (
    <div className='nav'>NavBar
      <ul>
        <button>
        <Link to='/'>
            <JournalEntries/>
        </Link>
        </button>
      </ul>

      <ul>
        <button>
        <Link to='about'>
            <About/>
        </Link>
        </button>
      </ul>
    
        
        
    </div>
  )
}

export default NavBar