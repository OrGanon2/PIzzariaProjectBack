import { Button, Modal } from '@mui/material';
import * as React from 'react';
import NewOrderComponent from './NewOrder';
import OrderInList from './OrderInList';
import './Orders.css'

function OrdersComponent() {
  
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [orders, setOrders] = React.useState([]);

    React.useEffect(() => {


      setTimeout(() => {
        setOrders([
          // @ts-ignore
          // {
          //   pizza: 'asdasd',
          //   pizzaSize: 2,
          //   pizzaToppings: 'asd asddf s',
          //   time: new Date(),
          //   price: 35,
          //   pizzariaId: 3
          // },
          // // @ts-ignore
          // {
          //   pizza: 'ad afs af a',
          //   pizzaSize: 2,
          //   pizzaToppings: 'asd asddf s',
          //   time: new Date(),
          //   price: 35,
          //   pizzariaId: 3
          // }
        ])
      }, 1500);
    }, [])

    const onNewOrderClicked = () => {
      setIsModalOpen(true);
    }

    const onModalClosed = () => {
      setIsModalOpen(false);
    }

    const onOrderSubmit = () => {
      setIsModalOpen(false);
    }
    
    const onRequestServerClicked = () => {
      fetch('https://localhost:7196/api/Orders').then(response => response.json().then(result => {
        console.log(result);
        setOrders(result);
      })).catch(e => {
        console.log(`error: ${e}`);
      })
    }

  return (
    <div>
        {orders.map((order, index) => {
            return <div key={`order-${index}`} className='single-order'>
              <OrderInList order={order}></OrderInList>
              </div>
        })}

        <div className='new-order'>
          <Button onClick={onRequestServerClicked} variant="contained" color="success">
              Request Orders from server
          </Button>
        </div>

        <div className='new-order'>
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
        </div>
    </div>
  );
}
export default OrdersComponent;