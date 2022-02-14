import '../App.css';
import {Switch, Router, Route} from 'react-router-dom'
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm'
import NavBar from './NavBar';
import EntryViewer from './EntryViewer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <JournalEntries/>
        </Route>
        <Route path='/new'>
          <JournalForm/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/:id'>
          <EntryViewer/>
        </Route>
      </Switch>  
    </div>
  );
}

export default App;
