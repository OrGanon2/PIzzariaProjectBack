import * as React from 'react';
import './Footer.css'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

function FooterComponent() {
  
  return (
    <div className='footer'>
        <div className='horizon'>
            <div className='logo'>
                <LocalPizzaIcon color='primary'  sx={{ fontSize: 30 }}></LocalPizzaIcon>
                <LocalPizzaIcon color='success'  sx={{ fontSize: 30 }}></LocalPizzaIcon>
                <LocalPizzaIcon color='action'  sx={{ fontSize: 30 }}></LocalPizzaIcon>
            </div>
            <div className='contact'>
                <b>Contact:</b>
                <div>Name: Or</div>
                <div>Telephone: 0123456789</div>
                <div>Address: asdasdasdsadsaddasd</div>
            </div>
        </div>
    </div>
  );
}
export default FooterComponent;