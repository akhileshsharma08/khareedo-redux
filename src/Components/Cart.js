import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast'
import { remove } from "../store/cartSlice";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const HandleRemove = (id) => {
    dispatch(remove(id));
    toast.success("Item Removed ");
  };

  const HandleAddCount = (id) => {
    console.warn(id, "fin");
    if (id == products.id) {
      setCount(count + 1);
      console.log(count + 1, "add count");
    }
  };
  const HandleRemoveCount = (id) => {
    if (id == products.id) {
      setCount(count - 1);
      console.log(count, "remove count");
    }
  };

  const HandleCheckout=()=>{
    console.log('order placed')
    toast.success('Order Placed');
  }
  return (
    <div>
      <div className="container min-h-screen">
        <div className="cartrapper">
          <h1 className="text-center text-2xl my-4 font-bold">Cart Details</h1>
          <h1 className="text-3xl text-center my-5">
            {products == ""
              ? "No Items in Cart "
              : ` Total Items in the Cart : ${products.length} `}
          </h1>

          <div className="flex justify-center items-center container">
            <table className="table-auto w-3/4">
              <thead>
                <tr className="bg-purple-600 text-white py-4 text-xl">
                  <th>Product Name</th>
                  <th> Image</th>
                  <th>Price</th>
                  <th>count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id} className="text-center ">
                    <td>{prod.productName.slice(0, 20)}</td>
                    <td className="">
                      <img
                        src={prod.imgUrl}
                        width={50}
                        height={50}
                        alt={prod.productName}
                      />
                    </td>
                    <td>{prod.price}</td>
                    <td>
                      <div className="flex justify-center items-center">
                        <div>
                          <button
                            className="p-1 mx-1 bg-purple-600 text-white"
                            onClick={() => {
                              HandleRemoveCount(prod.id);
                              console.log(prod.id);
                            }}
                          >
                            -
                          </button>
                        </div>
                        <p>{count} </p>
                        <div>
                          <button
                            className="p-1 mx-1 bg-purple-600 text-white"
                            onClick={() => {
                              HandleAddCount(prod.id);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          HandleRemove(prod.id);
                        }}
                        className="bg-purple-600 px-2 text-white capitalize rounded mx-2 py-1"
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>
        <div className="total text-center border border-t-4 mt-10 py-4">
           <h1 className="text-2xl font-bold text-gray-900 "> Total : $&nbsp;
           {  products.reduce((acc, item) =>  acc + item.price, 0)
             
            }
            <span> <button onClick={HandleCheckout} className="bg-purple-600 px-4 py-2 rounded mx-10 hover:bg-purple-800 text-white">Checkout</button></span>
            </h1> 
          </div>
          <h1 className="text-center bottom-5 mt-42">
            <Link
              to="/"
              className="text-purple-600 text-xl text-center font-bold my-4"
            >
              Continue Shopping
            </Link>
          </h1>
      </div>
    
      <Toaster />
    </div>
  );
};

export default Cart;
