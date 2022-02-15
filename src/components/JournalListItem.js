import React from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry}) {
  return (
    <div>
        <p>{entry.name}</p>
        <p>{entry.date}</p>
        <p>{entry.body}</p>
        <Link to={`/${entry.id}`}>
            <p>see more</p>
        </Link>
        <button onClick= {() => deleteEntry(entry)}>
            🗑️
        </button>
    </div>
  )
}

export default JournalListItem