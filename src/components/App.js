import {Switch, Route, useHistory} from 'react-router-dom'
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm'
import NavBar from './NavBar';
import styled, {css} from 'styled-components';
import EntryViewer from './EntryViewer';
import React, {useState, useEffect} from 'react'

function App() {
  
  // STYLING
  const consistentStyle = css`
    width: 100%;
    resize: none;
    font-family: Arial;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);

  > * {
    border: 2px solid rgba(0, 0, 0, 0.1); 
  }
  `;

  const CleanStyle = styled.div`
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
    ${consistentStyle}

  .button{
    font-size: 1em;
    margin: 1em;
    margin-left: 25%;
    padding: 0.25em 1em;
    border: 2px solid navy;
    border-radius: 3px;
    background-color: lightcoral;
    color: white;
    cursor: pointer;
  }

  .button:hover {
    background-color: turquoise;
    color: navy;
  }

  .linkbutton{
    font-size: 1em;
    margin: 1em;
    margin-left: 25%;
    padding: 0.25em 1em;
    border: 2px solid navy;
    border-radius: 3px;
    background-color: lightcoral;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .linkbutton:hover {
    background-color: turquoise;
    color: navy;
  }

  .navbutton{
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid navy;
  border-radius: 3px;
  background-color: #88bacd;
  color: navy;
  cursor: pointer;
  }

  .navbutton:hover {
  background-color: seashell;
  color: black;
  }

  .expand{
    font-size: .8em;
    margin: .5em;
    margin-right: 5%;
    padding: 0.25em 1em;
    border: 2px solid seagreen;
    border-radius: 3px;
    background-color: lavender;
    color: navy;
    float: left;
    cursor: pointer;
  }

  .expand:hover {
  background-color: #B399D4;
  color: white;
  }

  .favbutton{
    font-size: .8em;
    margin: .5em;
    margin-right: 5%;
    padding: 0.25em 1em;
    border: 2px solid seagreen;
    border-radius: 3px;
    background-color: #f6f7B0;
    color: navy;
    cursor: pointer;
  }

  .favbutton:hover {
    background-color: gold;
    color: black;
  }

  .favbuttonc {
    font-size: .8em;
    margin: .5em;
    margin-right: 5%;
    padding: 0.25em 1em;
    border: 2px solid seagreen;
    border-radius: 3px;
    background-color: gold;
    color: navy;
    cursor: pointer;
  }

  .favbuttonc:hover {
    background-color: #f6f7B0;
    color: black;
  }

  .trashcan{
    font-size: .72em;
    margin: .1em;
    margin-top: .5%;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
    background-color: beige;
    color: red;
    float: right;
    position: relative;
    cursor: pointer;
  }

  .trashcan:hover{
    background-color: #ef5350;
    color: white;
  }

  .break{
    border-color: hotpink;
  }


  .header {
    grid-column: 1 / 4;
    max-width: 100%;
    font-size: 40px;
    color: navy;
    background-color: peachpuff;
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }

  .navbar {
  grid-column: 1/2;
  background: #fce1e4;
  padding: 1rem;
  }

  .submitbtn {
    margin-left: 50%;
    margin-top: 1em;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid navy;
    border-radius: 3px;
    background-color: lightcoral;
    color: white;
    cursor: pointer;
  }

  .submitbtn:hover {
  background-color: turquoise;
    color: navy;
  }

  .title-input {
    color: navy;
    border: 2px solid turquoise;
    display: block;
    width: 100%;
    height: 50px;
    background-color: transparent;
    font-size: 20px;
  }

  .datetext{
    color: #44d0e7;
    font-size: 20px;
  }

  .titletext{
    color: #06a2c4;
    font-size: 20px;
  }

  .entrytext{
    color: navy;
    font-size: 20px;  
  }

  .date-input {
    color: navy;
    border: 2px solid turquoise;
    text-align: 50%;
    width: 100%;
    height: 40px;
    background-color: transparent;
    font-size: 20px;
  }

  .entry-input {
    color: navy;
    border: 2px solid turquoise;
    width: 100%;
    height: 570px;
    background-color: transparent;
    display: block;
    text-align: left;
    font-size: 20px; 
  }

  textarea {
    resize: none;
    font-family: Arial;
    font-size: 20px;
  }

  .viewers {
    grid-column: 2/4;
    background: seashell;
    font-weight:bold;
    padding: 1rem;
    overflow: auto;
    height: 85.5vh;
    position: relative;
  }
  .emailtext{
    color: navy;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
  }
  .emailtext:hover{
    color: blue;
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
  
  const updateEntry = updatedEntry => {
    const updatedFavorites = entries.map(entry => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry
      } else {
        return entry
      }
    })
    setEntries(updatedFavorites)
  }
  
  
  return (
    <CleanStyle >

      <Header/>

      <NavBar />
     
      <Switch>
        
        <Route exact path='/'>
          <JournalEntries entries={entries} deleteEntry={deleteEntry} updateEntry={updateEntry}   />
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
