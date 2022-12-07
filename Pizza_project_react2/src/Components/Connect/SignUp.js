import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignUp.css'
import { useNavigate  } from "react-router-dom";

function SignUpComponent(props) {
  
    const navigate = useNavigate();

    const [name, setName] = React.useState('');
    const [isNameValid, setIsNameValid] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [isUsernameValid, setIsUsernameValid] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = React.useState(false);
    const [phone, setPhone] = React.useState('');
    const [isPhoneValid, setIsPhoneValid] = React.useState(false);
    const [city, setCity] = React.useState('');
    const [address, setAddress] = React.useState('');
    

    function onUsernameChanged(event) {
        const username = event.target.value;
        const regex = /^(?=.{8,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/;
        setIsUsernameValid(regex.test(username));
        setUsername(username);
    }

    function onPasswordChanged(event) {
        const password = event.target.value;
        const regex = /^(?=[a-zA-Z0-9.]{8,20}$)(?!.*[.]{2})[^.].*[^.]$/;
        setIsPasswordValid(regex.test(password));
        setPassword(password);
    }

    function onNameChanged(event) {
        const name = event.target.value
        const regex = /\D{2,18} \D{2,18}/;
        setIsNameValid(regex.test(name));
        setName(name);
    }

    function onEmailChanged(event) {
        const email = event.target.value;
        const regex = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
        setIsEmailValid(regex.test(email))
        setEmail(email);
    }

    function onPhoneChanged(event) {
        const phone = event.target.value;
        setIsPhoneValid(!isNaN(phone));
        setPhone(phone);
    }

    function onConfirmPasswordChanged(event) {
        const confirmPassword = event.target.value;
        setIsConfirmPasswordValid(confirmPassword == password);
        setConfirmPassword(confirmPassword);
    }

    function onCityChanged(event) {
        const city = event.target.value;
        setCity(city);
    }

    function onAddressChanged(event) {
        const address = event.target.value;
        setAddress(address);
    }

    function onSubmit() {
        // Send username and password to Server.
        // Move to Home page.
        if (isNameValid && isEmailValid && isPasswordValid && isUsernameValid && isConfirmPasswordValid) {
            fetch('https://localhost:7196/api/Users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password, fullName: name, email, phoneNumber: phone, city, address})
            }).then(res => {
                console.log('finished request');
                document.global = {};
                document.global.user = {username: username}
                props.connect();
                navigate('/Home');
            }).catch(e => {
                console.log(`error: ${e}`);
            })   
        }
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
        <TextField error={!isNameValid} onChange={onNameChanged} id="filled-basic" label="full name" variant="outlined" />
        <TextField error={!isEmailValid} onChange={onEmailChanged} id="filled-basic" label="email" variant="outlined" />
        <TextField error={!isPhoneValid} onChange={onPhoneChanged} id="filled-basic" label="phone" variant="outlined" />
        <TextField onChange={onCityChanged} id="filled-basic" label="city" variant="outlined" />
        <TextField onChange={onAddressChanged} id="filled-basic" label="address" variant="outlined" />
        <TextField error={!isUsernameValid} onChange={onUsernameChanged} id="outlined-basic" label="Username" variant="outlined" />
        <TextField error={!isPasswordValid} onChange={onPasswordChanged} id="filled-basic" label="Password" variant="outlined" />
        <TextField error={!isConfirmPasswordValid} onChange={onConfirmPasswordChanged} id="filled-basic" label="Confirm password" variant="outlined" />
        <Button onClick={onSubmit} variant="contained" color="success">
            Submit
        </Button>
        </Box>

    </div>
  );
}
export default SignUpComponent;