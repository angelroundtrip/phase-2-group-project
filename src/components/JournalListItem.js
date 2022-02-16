import React from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry}) {
    // const alert = (alert) => {
    //   'ALERT'
    // }

  return (
    <div>
<<<<<<< HEAD
        <span>{entry.name}</span> | <span>{entry.date}</span> | <span>{entry.body}</span>
=======
        <span>{entry.title}</span>
        <span>{entry.date}</span>
        <span>{entry.body}</span>
>>>>>>> ad3ffaf4e26b5b6b1682a4cb65ac2477bb3d49c6
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