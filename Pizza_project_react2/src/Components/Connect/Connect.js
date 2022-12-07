import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import './Connect.css'

function ConnectComponent(props) {
  
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isWaitingForResponse, setIsWaitingForResponse] = React.useState(false);
    const navigate = useNavigate();

    function onUsernameChanged(event) {
        setUsername(event.target.value);
    }

    function onPasswordChanged(event) {
        setPassword(event.target.value);
    }

    function onConnectClicked() {
        // Send username and password to Server.
        // Move to Home page.
        setIsWaitingForResponse(true);
        fetch('https://localhost:7196/api/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        }).then(res => {
            // res.json().then(result => {
                setIsWaitingForResponse(false);
                console.log('finished request - CONNECT');
                // console.log(result);
                document.global = {};
                document.global.user = {username: username};
                props.connect();
            // })
        }).catch(e => {
            setIsWaitingForResponse(false);
            console.log(`error: ${e}`);
            alert('Invalid username or password')
        })









        // setIsWaitingForResponse(false);
        // console.log('finished request');
        // document.global = {};
        // document.global.user = {username: 'Ravid'};
        // props.connect();
    }

    function onSignUpClicked() {
        navigate('/Signup');
    }

  return (
    <div className='input-container'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField onChange={onUsernameChanged} id="outlined-basic" label="Username" variant="outlined" />
        <TextField onChange={onPasswordChanged} id="filled-basic" label="Password" variant="outlined" />
        <Button onClick={onConnectClicked} variant="contained" color="success">
            Connect
        </Button>
        {isWaitingForResponse ? 'Loading...' : null}

        <div>
            don't have user?
        </div>
        <Button onClick={onSignUpClicked} variant="contained" color="info">
            Sign Up
        </Button>
        </Box>

    </div>
  );
}
export default ConnectComponent;