import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate  } from "react-router-dom";
import './NewOrder.css'
import { Checkbox, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const toppings = [
    'Extra Cheese',
    'Peperoni',
    'Mushrooms',
    'Onion',
    'chocolate'
]

function NewOrderComponent(props) {
  
    const navigate = useNavigate();

    const [pizza, setPizza] = React.useState('');
    const [pizzaSize, setPizzaSize] = React.useState(1);
    // const [pizzaToppings, setPizzaToppings] = React.useState('');
    const [pizzaToppings, setPizzaToppings] = React.useState([])
    const [price, setPrice] = React.useState('');
    const [pizzaria, setPizzaria] = React.useState('');

    const pizzaToppingChenged = (event) => {
        const {
          target: { value },
        } = event;
        setPizzaToppings(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    function onPriceChanged(event) {
        const price = event.target.value;
        setPrice(price);
    }

    function onPizzaChanged(event) {
        const pizza = event.target.value
        setPizza(pizza);
    }

    function onPizzaSizeChanged(event) {
        const pizzaSize = event.target.value;
        setPizzaSize(pizzaSize);
    }

    function onPizzariaChanged(event) {
        const pizzaria = event.target.value;
        setPizzaria(pizzaria);
    }

    function onSubmit() {
        // Send Order to server
        fetch('https://localhost:7196/api/Orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pizza, pizzaSize, pizzaToppings: pizzaToppings.join(', '), price, pizzaria})
        }).then(res => {
            console.log('finished request');
            props.submit();
        }).catch(e => {
            console.log(`error: ${e}`);
            alert('failed to add new order')
            props.submit();
        })
        
    }

  return (
    <div className='new-order-container'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField onChange={onPizzaChanged} id="filled-basic" label="pizza" variant="outlined" />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
            <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={pizzaSize}
            onChange={onPizzaSizeChanged}
            >
            <MenuItem value={1}>Small</MenuItem>
            <MenuItem value={2}>Medium</MenuItem>
            <MenuItem value={3}>Large</MenuItem>
            </Select>
        </FormControl>

        



        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={pizzaToppings}
          onChange={pizzaToppingChenged}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {toppings.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={pizzaToppings.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>






        

        {/* <TextField onChange={onPizzaSizeChanged} id="filled-basic" label="pizza Size" variant="outlined" /> */}
        {/* <TextField onChange={onPizzaToppingsChanged} id="outlined-basic" label="pizza Toppings" variant="outlined" /> */}
        <TextField onChange={onPriceChanged} id="filled-basic" label="price" variant="outlined" />
        <TextField onChange={onPizzariaChanged} id="filled-basic" label="pizzaria" variant="outlined" />
        <Button onClick={onSubmit} variant="contained" color="success">
            Submit
        </Button>
        </Box>

    </div>
  );
}
export default NewOrderComponent;