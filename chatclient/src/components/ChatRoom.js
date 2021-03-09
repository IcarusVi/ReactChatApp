import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Messages from './messagesContainer';


const ChatRoom = () => {
    return (
        <div>
            <AppBar position={'relative'}>
                <Toolbar>
                    Room Name
                </Toolbar>
            </AppBar>
            <Messages />
        </div>

    )
}

export default ChatRoom;