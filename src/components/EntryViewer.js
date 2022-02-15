import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EntryViewer() {

  const [viewer, setViewer] = useState('')
  const { id } = useParams()
  
  useEffect( () => {
    fetch(`http://localhost:3000/entries/${id}`)
      .then(r => r.json())
      .then(setViewer)
  }, [id] )

  return (
    <div className='entry-viewer'>EntryViewer
      <h1>
        {viewer.title}
      </h1>
      <h2>
        {viewer.date}
      </h2>
      <p>
        {viewer.body}
      </p> 
      
    </div>

  )
}

export default EntryViewer