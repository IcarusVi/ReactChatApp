import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import fakeMessages from '../fakeMessages.json'

const useStyles = makeStyles({
    messageContainer: {
      padding: '1rem'
    },
    messageText:{
        padding: '0.5rem'

    }
  });


const Message = (message) => {
    const classes = useStyles();
    return (
        <div className="message">
            {message.user}
            <Paper className={classes.messageText} >
                {message.Message}
            </Paper>

        </div>
    )
}

const Messages = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.messageContainer}>
            {fakeMessages.map(message => Message(message))}
        </Paper>
    )
}

export default Messages;