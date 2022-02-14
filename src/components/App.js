import '../App.css';
import About from './About';
import Header from './Header';
import JournalEntries from './JournalEntries';
import JournalForm from './JournalForm';
import NavBar from './NavBar';
import styled, {css} from 'styled-components';

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
  ${layoutBox};

  .header {
    grid-column: 1 / 3;
    background: aqua;
    padding: 1rem;
    border-style: solid;
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
  
  return (
    <CleanStyle >

      <Header />
      <NavBar />
      <JournalEntries/>
      {/* <JournalForm/> */}
      {/* <About/> */}

    </CleanStyle>
  );
}

export default App;
