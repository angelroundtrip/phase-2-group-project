import {Switch, Route} from 'react-router-dom'
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm'
import NavBar from './NavBar';
import styled, {css} from 'styled-components';
import EntryViewer from './EntryViewer';
import React, {useState, useEffect} from 'react'

function App() {

  const layoutBox = css`
  width: 100%;
  min-height: 900px;
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
  ${layoutBox}

  .header {
  text-align: left;
  font-weight: bold;
  font-size: 30px;
  color: goldenrod;
  border: 10px;
  /* text-shadow: 2px 0 0 gold; */
  -webkit-text-stroke: 1px navy;
  font-family: Arial, Helvetica, sans-serif;
}

  .nav {
    grid-column: 1 / 2;
    background: skyblue;
    padding: 1rem;
    
  }

  .journal-entries {
    grid-column: 2 / 3;
    background: papayawhip;
    padding: 1rem;
    text-align: center;
  }

  /* .right {
    grid-column: 3 / 4;
    background: aliceblue;
    padding: 1rem;
  } */

  /* footer {
    grid-column: 1 / 4;
    background: palegreen;
    padding: 1rem;
  } */
`;
  
  const URL = 'http://localhost:3000/entries'

  const [entries, setEntries] = useState([])

  useEffect( () => {
    fetch(URL)
      .then(r => r.json())
      .then(setEntries)
  }, [] ) 


  const newJournal = newEntry => {
    fetch(URL, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newEntry)
    })
    setEntries([...entries, newEntry])
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
