import * as React from 'react';
import OrderInList from '../Orders/OrderInList';
import './PizzariaInList.css'

function PizzariaInList(props) {
  
  return (
    <div>
      <div className='single-pizzaria-container'>
        {props.pizzaria.orders.map((order, index) => {
            return <div key={`order-${index}`}>Order {index + 1}:<OrderInList order={order}></OrderInList> </div>
        })}
        <div>city: {props.pizzaria.city}</div>
        <div>email: {props.pizzaria.email}</div>
      </div>
    </div>
  );
}
export default PizzariaInList;