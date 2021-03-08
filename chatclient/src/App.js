import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Messages from './components/messagesContainer'

/*
Simple layout
Header with room name
Middle will be messages
Last a text field to enter text and send button
*/


function App() {

  return (
    <div className="App">
      <Container maxWidth='sm'>
        <AppBar position={'relative'}>
          <Toolbar>
            Room Name
          </Toolbar>
        </AppBar>
        <Messages/>
      </Container>
    </div>
  );
}

export default App;
