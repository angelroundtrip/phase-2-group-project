import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'

function JournalEntries({entries, deleteEntry, updateEntry}) {


  const [sort, setSort] = useState('sort')

  const handleSelectValue = e => {
    setSort(e.target.value)
    
  }


 const sortedEntries = () => {

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
    <div className='viewers'>

        <Link 
          className='linkbutton'
          role='button'
          to='/new'
          fontWeight='lighter'
          >    
          Create New Entry
        </Link>

        <select 
          onChange={handleSelectValue} 
          value={sort} 
          className='linkbutton'
          role='button'
          style={{textAlign: 'center'}}
          > 
          <option hidden value={'sort'}> Sort </option>
          <option value={'old'}> Oldest to Newest </option>
          <option value={'new'}> Newest to Oldest </option>
          <option value={'fav'}> Favorites </option>
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