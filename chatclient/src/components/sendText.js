import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const useStyles = makeStyles({
    sendText: {
      display: 'flex',
      flexDirection: 'row'
    }
  });



//This is the send message component, allowing users to type into text field and click the arrow to send message.
const SendText = () => {
    const classes = useStyles()
    return (
        <div className={classes.sendText}>
            <TextField style={{width:'100%'}} />
            <SendOutlinedIcon/>
        </div>
    )
}

export default SendText;