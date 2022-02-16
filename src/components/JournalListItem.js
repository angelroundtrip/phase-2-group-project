import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function JournalListItem({entry, deleteEntry, updateEntry }) {
    // const alert = (alert) => {
    //   'ALERT'
    // }


    const toggleFavorite = () => {

      fetch(`http://localhost:3000/entries/${entry.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            favorited: !entry.favorited
        })
    })
        .then(r=>r.json())
        .then(updatedEntry => updateEntry(updatedEntry))

    }   

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
                {entry.favorited ? <button onClick={() => toggleFavorite(entry)}>Favorite ★</button> : <button onClick={() => toggleFavorite(entry)}>Favorite ☆</button> }
            </span>
        </div>
    )
}

export default JournalListItem