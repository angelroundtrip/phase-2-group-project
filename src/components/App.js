import '../App.css';
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <JournalEntries/>
      <JournalForm/>
      <About/>

    </div>
  );
}

export default App;
