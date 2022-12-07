import * as React from 'react';
import './OrderInList.css'

function OrderInList(props) {
  
  return (
    <div className='all-container'>
      <div className='pizza-container'>
        <div>pizza:{props.order.pizza}</div>
        <div>pizzaSize:{props.order.pizzaSize}</div>
        <div>pizzaToppings:{props.order.pizzaToppings}</div>
        <div>time:{props.order.dateTime?.toString()}</div>
        <div>price:{props.order.price}</div>
        <div>pizzariaId:{props.order.pizzariaId}</div>
      </div>
    </div>
  );
}
export default OrderInList;