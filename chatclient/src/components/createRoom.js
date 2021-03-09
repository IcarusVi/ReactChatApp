import { TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useState } from 'react';



const CreateRoom = () => {
    const [userName, setUserName] = useState('')
    const [roomName, setRoomName] = useState('')

    const handleChange = (e) => {
        let value = e.target.value;
        if(e.target.name === 'userName'){
            setUserName(value)
        }
        else if(e.target.name === 'roomName'){
            setRoomName(value)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomName === '' || userName === '') {
            console.log('Fill in username and room name')
            return;
        }
        else{
            console.log(userName)
            console.log(roomName)
        }

    }

    return (
        <Paper style={{ padding: '1rem', width: '50%' , margin:'auto'}}>
            <form style={{margin:'0 auto', textAlign:'center'}} onSubmit={handleSubmit}>

                <TextField label="User Name" onChange={handleChange} name='userName' id='userName'>

                </TextField>

                <TextField label="Room Name" onChange={handleChange} name='roomName' id='roomName'>

                </TextField>

                <Button style={{marginTop:'1rem'}} color='primary' variant='contained' type='submit'>Join Room</Button>

            </form>

        </Paper>

    )




}

export default CreateRoom;