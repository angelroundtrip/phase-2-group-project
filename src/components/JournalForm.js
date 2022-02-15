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
    <div className="journal-form">
      <form onSubmit={submitNewEntry}>

      <span>
        <input className='form-input' type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
      </span>

      <span>
        <input className='form-input' type='text' placeholder='Date' value={date} onChange={e => setDate(e.target.value)} />
      </span> 

      <p>
        <textarea className='entry-input' type='text' placeholder='Entry' value={body} onChange={e => setBody(e.target.value)} />
      </p>

        <div><button className='button' type='submit' style={{align:'center'}}> SUBMIT</button></div>
        
      </form>
    </div>
  )
}

export default JournalForm