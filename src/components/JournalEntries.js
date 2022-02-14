import React from 'react'
import {Link} from 'react-router-dom'

function JournalEntries() {
  return (
    <div>JournalEntries
        <Link to='/new'>
            <button>
                Create new
            </button>
        </Link>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
  )
}

export default JournalEntries