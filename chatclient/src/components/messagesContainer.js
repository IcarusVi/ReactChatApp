import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import fakeMessages from '../fakeMessages.json'
import SendText from './sendText'
import {useState} from 'react'
import Message from './message'

const useStyles = makeStyles({
    messageContainer: {
      padding: '1rem'
    }
  });

const Messages = () => {
    const classes = useStyles();
    const [texts, setTexts] = useState(fakeMessages)
    const updateMessages = (newText) => {
        setTexts([...texts, newText])
        console.log(texts)
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