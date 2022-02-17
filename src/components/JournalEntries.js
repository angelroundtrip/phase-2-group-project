import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'

function JournalEntries({entries, deleteEntry, updateEntry}) {


  const [sort, setSort] = useState('old')

  const handleSelectValue = e => {
    setSort(e.target.value)
    
  }

  // console.log(sort)

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

        <Link 
          className='linkbutton'
          role='button'
          to='/new'
          >
                
          Create New Entry

        </Link>

        <span style={{color: 'navy'}}></span>
          
          <select 
              onChange={handleSelectValue} 
              value={sort} 
              className='linkbutton'
              role='button'
              style={{textAlign: 'center'}}
            > 
            <option>Sort</option>
            <option value={'old'}>Oldest to Newest</option>
            <option value={'new'}>Newest to Oldest</option>
            <option value={'fav'}>Favorites</option>
          </select>
       

            {sortedEntries().map(entry => 
              <span key={entry.id}> 
                <hr className='break'/> <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry} updateEntry={updateEntry}  />  
              </span> 
            )}
            
    </div>
  )
}

export default JournalEntries