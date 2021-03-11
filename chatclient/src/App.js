import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import CreateRoom from './components/createRoom';
import ChatRoom from './components/ChatRoom';
import { useSelector } from 'react-redux';


/*
Simple layout
Header with room name
Middle will be messages
Last a text field to enter text and send button
*/


function App() {
  const user = useSelector(state => state)

  return (
    <div className="App">
      <Router>
        <Container maxWidth='sm'>
          <Switch>
            <Route path='/room/:roomName'>
              {user !== undefined ? <ChatRoom/> : <Redirect to='/'/> }
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
