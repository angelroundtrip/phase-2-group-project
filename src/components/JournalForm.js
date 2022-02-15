import React, {useState} from 'react'

function JournalForm({newJournal}) {

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [body, setBody] = useState('')

  const submitNewEntry = e => {
    e.preventDefault()

    const newObj = {
      name: name,
      date: date,
      body: body
    }

    newJournal(newObj)
  }
 // We want to go to the journal viewer after submitting a new entry
  return (
    <div>
      <form onSubmit={submitNewEntry}>
        <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
          
        
        <input type='text' placeholder='Date' value={date} onChange={e => setDate(e.target.value)} />
         
        
        <textarea type='text' placeholder='Entry' value={body} onChange={e => setBody(e.target.value)} />

        <button type='submit'> HERE !</button>
          
        
      </form>
    </div>
  )
}

export default JournalForm