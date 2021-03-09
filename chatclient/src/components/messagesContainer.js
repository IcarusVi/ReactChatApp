import { makeStyles } from '@material-ui/core/styles';
import {io} from "socket.io-client";
import Paper from '@material-ui/core/Paper';
import fakeMessages from '../fakeMessages.json'
import SendText from './sendText'
import {useState, useEffect, useRef} from 'react'
import Message from './message';

const endPoint = 'http://localhost:8000'
let socket;


const useStyles = makeStyles({
    messageContainer: {
      padding: '1rem'
    }
  });

const Messages = () => {
    const classes = useStyles();
    const socketRef = useRef();
    
    const [texts, setTexts] = useState([])

    useEffect(() => {
        socketRef.current = io(endPoint)

        socketRef.current.on('message received', (message) => {
            console.log(message)
            setTexts((texts) => [...texts, message])
            console.log(texts)
        })
    }, [])

    const updateMessages = (newText) => {
        socketRef.current.emit('message sent', newText)
    }
    
    return (
        <Paper className={classes.messageContainer}>
            {texts.map(text => {
                return (
                    <Message message={text}/>
                )
            })}
            <SendText updateMessages={updateMessages}/>
        </Paper>
    )
}

export default Messages;