import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { remove } from '../store/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const products = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const HandleRemove = (id) => {
    dispatch(remove(id))
    toast.success('Item Removed ')
  }
  return (
    <div>
      <div className="container min-h-screen">
        <div className="cartrapper">
          <h1 className='text-center text-2xl my-4 font-bold'>Cart Details</h1>
          <h1 className='text-3xl text-center my-5'>{products ==""? "No Items in Cart ":` Total Items in the Cart : ${products.length} `}</h1>
          {products.map((prod) => (
            <div className="cartcard flex  justify-around items-center">
              <div key={prod.id} className="imagebox w-3/4 flex mb-2 rounded mx-4 bg-gray-300 p-2 justify-around items-center">
                <img src={prod.imgUrl} width={50} height={50} alt={prod.productName} />
                <h5>{prod.productName}</h5>
                <h5>{prod.price}</h5>
                <button onClick={() => { HandleRemove(prod.id) }} className='bg-purple-600 px-2 text-white capitalize rounded mx-2 py-1'>remove</button>
              </div>
            </div>
          ))}
          <h1 className='text-center bottom-5' >

            <Link to="/" className="text-purple-600 text-xl text-center font-bold my-4">Continue Shopping</Link>
          </h1>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Cart
