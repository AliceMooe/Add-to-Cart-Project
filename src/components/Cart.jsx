
import CartItem from "./Cartitem";
import { useContext } from "react";
import { itemContext } from "../store/itemContext";

// const laptops = [
//     {
//       ID : 1,
//       Price : 999 ,
//       Name : "MacBook Air 13” (M1 Chip) ",
//       Description : "The most affordable Mac laptop to get things done on the go.",
//       Quantity : 2,
  
//     },
//     {
//       ID : 2,
//       Price : 1099 ,
//       Name : "MacBook Air 13” (M2 chip)",
//       Description : "Strikingly thin and fast so you can work, play, or create anywhere.",
//       Quantity : 2,
//     },
//     {
//       ID : 3,
//       Price : 1099 ,
//       Name : "MacBook Air 15” (M2 chip)",
//       Description : "Strikingly thin and fast so you can work, play, or create anywhere.",
//       Quantity : 2,
//     },
   
  
//   ];



const Cart = (props) => {
  const{items,totalAmount} = useContext(itemContext)
  const totalPrice = `$${totalAmount.toFixed(2)}`
  return (
    <section className='cart-box'>
       <h2>Your cart items are here.</h2>
      <section className="overflow-ctr">
      {items.length < 1 ? (<h3 className="no-item">No item in your cart!!!</h3>) : ( <>
       {
        items.map((laptop) => (
            <CartItem key={laptop.ID} laptop={laptop} />
        ))
       }
       </>)}
       
      </section>
       <hr />
       <div className="total">
        <h3>Total Price</h3>
        <p> {totalPrice}</p>
       </div>
       <div className="btns" >
        <button className="close-btn" onClick={props.hideCartHandler}>Cancel</button>
        {items.length < 1 ? (<></>) : ( <>
          <button className="order-btn" onClick={()=> {alert("Ordered !!")}}> Order</button>
       </>)}
        
       </div>

    </section>
  )
}

export default Cart;