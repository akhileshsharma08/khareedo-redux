import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {remove} from '../store/cartSlice'

const Cart = () => {
  const products= useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  const HandleRemove=(id)=>{
      dispatch(remove(id))
  }
  return (
    <div>
      <div className="container">
        <div className="cartrapper">
          <h1 className='text-center text-2xl my-4 font-bold'>Cart Details</h1>
          
          {products.map((prod)=>(
            <div className="cartcard flex  justify-around items-center">
              <div className="imagebox w-3/4 flex mb-2 rounded mx-4 bg-gray-300 p-2 justify-around items-center">
                <img src={prod.imgUrl} width={50} height={50} alt={prod.productName} />
              <h5>{prod.productName}</h5>
              <h5>{prod.price}</h5>
              <button onClick={()=>{HandleRemove(prod.id)}} className='bg-purple-600 px-2 rounded mx-2'>remove item</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
