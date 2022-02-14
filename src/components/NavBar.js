import React from 'react'
import {Link} from 'react-router-dom'
import About from './About'
import JournalEntries from './JournalEntries'

function NavBar() {
  return (
    <div>NavBar
        <Link to='/'>
            <JournalEntries/>
        </Link>
        <Link to='about'>
            <About/>
        </Link>
    </div>
  )
}

export default NavBar