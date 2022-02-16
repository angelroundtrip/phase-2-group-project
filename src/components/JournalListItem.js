import React from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry}) {
    // const alert = (alert) => {
    //   'ALERT'
    // }

  return (
    <div>
        <span>{entry.title}</span> | <span>{entry.date}</span> | <span>{entry.body.slice(0, 99)}</span>
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