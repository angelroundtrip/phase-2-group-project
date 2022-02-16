import React from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'

function JournalEntries({entries, deleteEntry, handleSortClick}) {

  return (
    <div className='journal-entries'>

        <Link to='/new'>
            <button className='button'> Create new entry </button>
        </Link>

        <button onClick={handleSortClick} className='button'> Sort By Date </button>
            {entries.map(entry => 
              <span key={entry.id}> 
                <hr className='break'/> <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry}/>  
              </span> 
            )}
            
    </div>
  )
}

export default JournalEntries