import React, {useState} from 'react'

function JournalForm({newJournal}) {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [body, setBody] = useState('')
  const [favorited, setFavorited] = useState(false)

  const submitNewEntry = e => {
    e.preventDefault()
    const newObj = {
      title: title,
      date: date,
      body: body,
      favorited: favorited
    }
    newJournal(newObj)
  }

 // We want to go to the journal viewer after submitting a new entry
  return (
    <div className="journal-form">
      <form onSubmit={submitNewEntry}>

      <div><button className='submitbtn' type='submit'> Submit </button></div>

      <p>
        <input className='date-input' type='date' placeholder='Date' value={date} onChange={e => setDate(e.target.value)} />
      </p>

      <p>
        <textarea className='title-input' type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
      </p>


      <p>
        <textarea 
          className='entry-input' 
          type='text' placeholder='Enter Your Reactions Here' 
          value={body} 
          onChange={e => setBody(e.target.value)} 
          // onKeyDown makes tab/indent work. It was broken before. Code is odd though. 
          onKeyDown={e => {
              if ( e.key === 'Tab' && !e.shiftKey ) {
              document.execCommand('insertText', false, "\t");
              e.preventDefault();
              return false;
            }}}/>
      </p>
 
      </form>
    </div>
  )
}

export default JournalForm