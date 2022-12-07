import { Button, Modal } from '@mui/material';
import * as React from 'react';
import PizzariaInList from './PizzariaInList';
import './Pizzarias.css'

function PizzariasComponent() {
  
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [pizzarias, setPizzarias] = React.useState([
      {
        orders: [
            {
            pizza: 'asdasd',
            pizzaSize: 2,
            pizzaToppings: 'asd asddf s',
            time: new Date(),
            price: 35,
            pizzariaId: 3
        },
        {
            pizza: 'ad afs af a',
            pizzaSize: 2,
            pizzaToppings: 'asd asddf s',
            time: new Date(),
            price: 35,
            pizzariaId: 3
        }
        ],
        city: 'asd asd',
        email: 'asdasdasdsad'
      },
      {
        orders: [
            {
            pizza: 'asdasd',
            pizzaSize: 2,
            pizzaToppings: 'asd asddf s',
            time: new Date(),
            price: 35,
            pizzariaId: 3
        },
        {
            pizza: 'ad afs af a',
            pizzaSize: 2,
            pizzaToppings: 'asd asddf s',
            time: new Date(),
            price: 35,
            pizzariaId: 3
        }
        ],
        city: 'asd asd',
        email: 'asdasdasdsad'
      }
    ]);

  return (
    <div>
        <div className='pizzaria-container'>
            {pizzarias.map((pizzaria, index) => {
                return <div key={`pizzaria-${index}`} className='single-pizzaria'>
                <PizzariaInList pizzaria={pizzaria}></PizzariaInList>
                
                </div>
            })}
        </div>

        {/* <div className='new-order'>
          <Button onClick={onNewOrderClicked} variant="contained" color="info">
              New order
          </Button>
        </div>
        <div>
        <Modal
          open={isModalOpen}
          onClose={onModalClosed}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <NewOrderComponent submit={onOrderSubmit}></NewOrderComponent>
        </Modal>
        </div> */}
    </div>
  );
}
export default PizzariasComponent;