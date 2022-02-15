import React from 'react'
import {Link} from 'react-router-dom'
import JournalListItem from './JournalListItem'
// imort Card from '@mui/material/Card';p

function JournalEntries({entries, deleteEntry}) {
  return (
    <div className='journal-entries'>
        <Link to='/new'>
            <button className='button'>
                Create new
            </button>
        
        </Link>
        {/* <Card sx={{ maxWidth: 345 }}> */}
            {entries.map(entry => 
              <JournalListItem key={entry.id} entry={entry} deleteEntry={deleteEntry}  
              /> 
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