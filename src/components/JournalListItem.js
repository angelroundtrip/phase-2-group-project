import React from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry}) {
    // const alert = (alert) => {
    //   'ALERT'
    // }

  return (
    <div>
        <span>{entry.name}</span> | <span>{entry.date}</span> | <span>{entry.body}</span>
        <Link to={`/${entry.id}`}>
            <button className='expand'>Expand</button>
        </Link>
        <span>
         <button className='trashcan' onClick= {() => deleteEntry(entry)} >
          Delete 🗑
        </button>
        </span>
    </div>
  )
}

export default JournalListItem