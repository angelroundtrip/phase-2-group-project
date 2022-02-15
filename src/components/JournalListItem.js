import React from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry}) {
  return (
    <div>
        <span>{entry.name}</span>
        <span>{entry.date}</span>
        <span>{entry.body}</span>
        <Link to='/:id'>
            <p>see more</p>
        </Link>
        <button className='trashcan' onClick= {() => deleteEntry(entry)}>
          Delete 🗑
        </button>
    </div>
  )
}

export default JournalListItem