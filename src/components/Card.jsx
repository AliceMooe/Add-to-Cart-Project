import  { useContext, useState } from 'react';
import {itemContext} from "../store/itemContext";

const Card = ({laptop}) => {
  const {ID , Name, Description,Price} = laptop;
  const {addItem}= useContext(itemContext);

  const [currentAmount,setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = ()=>{
    if (currentAmountNumber < 1 || currentAmountNumber > 5){
      alert("Please enter an valid amount!!");
      return;
    }
    addItem ({
      ID,
      amount : currentAmountNumber,
      Name,
       Price,
     
     });
  
  };
  return (
    <div className='card'>
       <div>
       <p className='card-title'>{Name} </p>
        <p className='card-description'>{Description}</p>
        <p className='card-price'>${Price}</p>
       </div>
        <div className='card-right'>
        <input type='number' className='card-input' min={1} max={5} 
        value={currentAmount} onChange={(e) => {
          setCurrentAmount(e.target.value);
        }}/>
        <button className='card-button' onClick={addToCartHandler}>+ ADD</button>
        </div>
    </div>
  )
}

export default Card;