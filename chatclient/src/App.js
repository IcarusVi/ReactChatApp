import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import CreateRoom from './components/createRoom';
import ChatRoom from './components/ChatRoom';

/*
Simple layout
Header with room name
Middle will be messages
Last a text field to enter text and send button
*/


function App() {

  return (
    <div className="App">
      <Router>
        <Container maxWidth='sm'>
          <Switch>
            <Route path='/room'>
              <ChatRoom />
            </Route>
            <Route path='/'>
              <CreateRoom />
            </Route>

          </Switch>

        </Container>
      </Router>
    </div>
  );
}

export default App;
