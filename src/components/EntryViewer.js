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
    <div className='viewers'>

      <span style={{color: 'teal', fontSize: '25px'}}> Date | <span style={{color: 'navy', fontWeight: 'bold'}}> {viewer.date} </span> </span>
      
      <p style={{color: 'teal', fontSize: '25px'}}> Title | <span style={{color: 'navy', fontWeight: 'bold'}}> {viewer.title} </span> </p>
      
      <p style={{color: 'teal', fontSize: '25px'}}> Entry </p>
      <p style={{color: 'navy', fontSize: '25px', fontWeight: 'bold'}}> {viewer.body} </p> 
      
    </div>

  )
}

export default EntryViewer