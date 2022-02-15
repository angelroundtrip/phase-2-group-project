import {Switch, Route, useHistory} from 'react-router-dom'
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm'
import NavBar from './NavBar';
import styled, {css} from 'styled-components';
import EntryViewer from './EntryViewer';
import React, {useState, useEffect} from 'react'
// import '../App.css'

function App() {
// STYLING
  const consistentStyle = css`
  width: 100%;
  /* resize: both; */
  overflow: auto;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
`;

  const CleanStyle = styled.div`
   display: grid;
  /* grid-template: auto 1fr auto / auto 1fr auto; */
  ${consistentStyle}

  .button{
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: lightcoral;
    color: navy;
    -webkit-text-stroke: .2px white;
    cursor: pointer;
  }

  .button:hover {
    background-color: turquoise;
    color: white;
  }

  .trashcan{
    border: 1px solid red;
    cursor: pointer;
    background-color: white;
  }

  .trashcan:hover{
    border: 1px solid black;
    cursor: pointer;
    background-color: #ef5350;
    color: white;
  }


  .header {
    /* min-height: 80px; */
    grid-column: 1 / 4;
    max-width: 100%;
    text-align: left;
    /* font-weight: bold; */
    font-size: 40px;
    color: navy;
    /* border: 10px; */
    background-color: peachpuff;
    /* text-shadow: 2px 0 0 gold; */
    /* -webkit-text-stroke: 1px goldenrod; */
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }

  .navbar {
    grid-column: 1/2;
    background: #fce1e4;
    padding: 1rem;
  }

  .form-input {
    padding: 10px;
    color: black;
    border: 1px solid turquoise;
    text-align: center;
    width:30%
  }

  .entry-input {
    padding: 10px;
    color: black;
    border: 1px solid turquoise;
    width: 70%;
    /* height: 80% */
    /* text-align: center; */
  }

  .journal-entries {
    grid-column: 2/4;
    background: seashell;
    padding: 1rem;
    font-weight:bold;
  }
  /* Same as journal-entries, code can be cleaner */
  .journal-form {
    grid-column: 2/4;
    background: seashell;
    padding: 1rem;
  }

  .about {
    grid-column: 2/4;
    background: seashell;
    padding: 1rem;
  }

  .entry-viewer {
    grid-column: 2/4;
    background: seashell;
    padding: 1rem;
  }
  `;

// Important code
  const URL = 'http://localhost:3000/entries'

  const [entries, setEntries] = useState([])

  useEffect( () => {
    fetch(URL)
      .then(r => r.json())
      .then(setEntries)
  }, [] ) 

  const history = useHistory()

  const newJournal = newEntry => {
    fetch(URL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newEntry)
    })
    .then(r => r.json())
    .then(data => {
      history.push(`/${data.id}`)
    
      setEntries([...entries, data])
    
    })
  }

  const deleteEntry = entry => {
    const newListOfEntries = entries.filter(entryObj => entryObj.id !== entry.id)
    setEntries(newListOfEntries)

    fetch(URL + `/${entry.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <CleanStyle >

      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <JournalEntries entries={entries} deleteEntry={deleteEntry} />
        </Route>
        <Route path='/new'>
          <JournalForm newJournal={newJournal} />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route exact path='/:id'>
          <EntryViewer/>
        </Route>
      </Switch> 

    </CleanStyle>
  );
}

export default App;
