import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Messages from './messagesContainer';
import {useSelector} from 'react-redux'

const ChatRoom = ({match}) => {
    const user = useSelector(state => state)
    const {
        params: {roomName}
    } = match;

    return (
        <div>
            <AppBar position={'relative'}>
                <Toolbar>
                    {roomName}
                </Toolbar>
            </AppBar>
            <Messages user={user} room={roomName} />
        </div>

    )
}

export default ChatRoom;