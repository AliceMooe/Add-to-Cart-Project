import React, { useContext } from 'react'
import { itemContext } from '../store/itemContext';

const CartItem = ({laptop}) => {
  const{addItem,removeItem} = useContext(itemContext)

  const addAmountHandler = () => {
    addItem({...laptop,amount:1})
  };
  const removeAmountHandler = () => {
    removeItem(laptop.ID)
  };
  return (
    <div className='card cart'>
    <div>
    <p className='card-title'>{laptop.Name} </p>
    <p className='card-price'>${laptop.Price}</p>
     
    </div>
     <div className='card-right'>
    <p className='card-quantity'> x <span>{laptop.amount}</span></p>
     </div>
     <div className='quantity-ctr'>
      <button className='quantity-btn m-ctr' onClick={addAmountHandler}>+</button>
      <button className='quantity-btn' onClick={removeAmountHandler}>-</button>
     </div>
 </div>
  )
}

export default CartItem ;