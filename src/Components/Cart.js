import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  removeItem,
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../store/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
    toast.success("Item Removed");
  };

  const handleAddCount = (id) => {
    dispatch(incrementItemQuantity({ itemId: id }));
  };

  const handleRemoveCount = (id) => {
    dispatch(decrementItemQuantity({ itemId: id }));
  };

  const handleBuyNow = () => {
    console.log("Buying products");
    // toast.success('Order Placed');
    navigate("/checkout");
  };

  const calculateTotal = () => {
    return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  useEffect(() => {
    // Store the total in localStorage
    localStorage.setItem('cartTotal', calculateTotal());
  }, [products]);

  return (
    <div>
      <div className="container min-h-screen">
        <div className="cartrapper">
          <h1 className="text-center text-2xl my-4 font-bold">Cart Details</h1>
          <h1 className="text-3xl text-center my-5">
            {products.length === 0
              ? "No Items in Cart"
              : `Total Items in the Cart: ${products.length}`}
          </h1>

          <div className="flex justify-center items-center container">
            <table className="table-auto w-3/4">
              <thead>
                <tr className="bg-purple-600 text-white py-4 text-xl">
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Count</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id} className="text-center">
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
                        <button
                          className="p-1 mx-1 bg-purple-600 text-white"
                          onClick={() => handleRemoveCount(prod.id)}
                        >
                          -
                        </button>
                        <p>{prod.quantity}</p>
                        <button
                          onClick={() => handleAddCount(prod.id)}
                          className="p-1 mx-1 bg-purple-600 text-white"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemove(prod.id)}
                        className="bg-purple-600 px-2 text-white capitalize rounded mx-2 py-1"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="total text-center border border-t-4 mt-10 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Total : $&nbsp;{calculateTotal()}
            <span>
              <button
                onClick={handleBuyNow}
                className="bg-purple-600 px-4 py-2 rounded mx-10 hover-bg-purple-800 text-white"
              >
                Buy Now
              </button>
            </span>
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
