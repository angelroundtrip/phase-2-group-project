import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'
// import Card from '@mui/material/Card';

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
        {/* <Card sx={{ maxWidth: 345 }}> */}
            {sortedEntries().map(entry => 
              <span key={entry.id}> 
                <hr className='break'/> <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry} updateEntry={updateEntry}  />  
              </span> 
            )}
         
          {/* </Card> */}
            
    </div>
  )
}
// !NOTE
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

export default JournalEntries