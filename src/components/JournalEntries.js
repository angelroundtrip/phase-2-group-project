import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'

function JournalEntries({entries, deleteEntry, updateEntry}) {


  const [sort, setSort] = useState('old')

  const handleSelectValue = e => {
    setSort(e.target.value)
    
  }

  console.log(sort)

 const sortedEntries = () => {
  // const newestToOldest =  entries.sort( (a, b) => new Date(a.date) - new Date(b.date))
  // const oldestToNewest =  entries.sort( (a, b) => new Date(b.date) - new Date(a.date))
  // const favoritedEntries = entries.sort( (a, b) => a.favorited === b.favorited ? 0 : a.favorited ? -1 : 1 )

  if (sort === 'old') {
    return entries.sort( (a, b) => new Date(a.date) - new Date(b.date))
  } else if (sort === 'new') {
    return entries.sort( (a, b) => new Date(b.date) - new Date(a.date))
  } else if (sort === 'fav') {
    
    return entries.sort( (a, b) => a.favorited === b.favorited ? 0 : a.favorited ? -1 : 1 )
  } else {
    return entries
  }  
 }

    


  return (
    <div className='journal-entries'>

        <Link to='/new'>
            <button className='button'>
                Create New Entry
            </button>
        </Link>
        <label> Sort By: 
          <select onChange={handleSelectValue} value={sort} className='button' >
            <option value={'old'}>Oldest to Newest</option>
            <option value={'new'}>Newest to Oldest</option>
            <option value={'fav'}>Favorites</option>
          </select>
        </label>
      
            
            <button className='button'> Create new entry </button>
       

            {sortedEntries.map(entry => 
              <span key={entry.id}> 
                <hr className='break'/> <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry} updateEntry={updateEntry}  />  
              </span> 
            )}
            
    </div>
  )
}

export default JournalEntries