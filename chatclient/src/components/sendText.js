import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useState } from 'react'

const useStyles = makeStyles({
    sendText: {
        display: 'flex',
        flexDirection: 'row'
    }
});



//This is the send message component, allowing users to type into text field and click the arrow to send message.
const SendText = ({ updateMessages }) => {
    const classes = useStyles()
    const [textInput, setTextInput] = useState('')

    const updateText = (e) => {
        setTextInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (textInput === '') {

            return;
        }
        let message = {
            user: 'Me',
            Message: textInput
        }
        updateMessages(message)
        setTextInput('')
    }
    return (
        <form className={classes.sendText} onSubmit={handleSubmit}>
            <TextField onChange={updateText} value={textInput} style={{ width: '100%' }}> </TextField>
            <SendOutlinedIcon onClick={handleSubmit} />
        </form>

    )
}

export default SendText;