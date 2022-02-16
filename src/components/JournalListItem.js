import React from 'react'
import { Link } from 'react-router-dom'


function JournalListItem({entry, deleteEntry}) {
    // const alert = (alert) => {
    //   'ALERT'
    // }

  return (
   
    <div>
        <Link to={`/${entry.id}`}>
            <button className='expand'>Expand</button>
        </Link>

        <span className='datetext'>{entry.date}</span> ║
        <span className='titletext'>{entry.title.slice(0, 50)}</span> ║ 
        <span className='entrytext'>{entry.body.slice(0, 69)}</span>

        <span>
         <button className='trashcan' onClick= {() => deleteEntry(entry)} > Delete 🗑 </button>
        </span>

    </div>
   
  )
}

export default JournalListItem