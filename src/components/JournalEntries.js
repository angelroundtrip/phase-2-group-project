import React from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'

function JournalEntries({entries}) {
  return (
    <div className='journal-entries'>
        <Link to='/new'>
            <button>
                Create new
            </button>
        </Link>
        <ul>
            {entries.map(entry => 
              <Link to='/:id'>
                <JournalListItem entry={entry} key={entry.id} /> 
              </Link>
            )}
        </ul>
    </div>
  )
}

export default JournalEntries