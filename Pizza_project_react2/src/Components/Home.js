import { Button } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router';
import './Home.css'

function HomeComponent() {

    const navigate = useNavigate();

    const onClick = () => {
        navigate('/Orders')
    }
  
  return (
    <div>
        <div className='home-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <button className='home-button' onClick={onClick} variant="contained" color="success">
              GO TO ORDER
        </button>
    </div>
  );
}
export default HomeComponent;