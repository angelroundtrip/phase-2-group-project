import React from 'react'

function JournalListItem({entry}) {
  return (
    <div>
        <p>{entry.name}</p>
        <p>{entry.date}</p>
        <p>{entry.body}</p>
    </div>
  )
}

export default JournalListItem