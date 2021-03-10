import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Messages from './messagesContainer';
import {useSelector} from 'react-redux'

const ChatRoom = () => {
    const user = useSelector(state => state)
    console.log(user)
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