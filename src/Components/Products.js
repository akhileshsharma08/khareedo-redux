import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
// import data from '../data/products'
import "../App.css";
import { FaStar } from "react-icons/fa";
import { STATUSES } from "../store/productSclice";
import { fetchProducts, setProducts } from "../store/productSclice";
import Feature from "./Feature";
// import Carausel from './Carausel'
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Triangle } from "react-loader-spinner";

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([])

  const { data: products, status } = useSelector((state) => state.product);
  const { cartData } = useSelector((state) => state.cart);
  useEffect(() => {
    // setProducts(data)
    dispatch(fetchProducts());
  }, []);

  const Handleadd = (prod) => {
    dispatch(addItem(prod));
    toast.success("Product Added to Cart !");
  };

  const HandleRemove = (id) => {
    dispatch(removeItem(id));
    alert("item removed");
  };

  // console.log(data, "data")
  if (status === STATUSES.LOADING) {
    return (
      <Triangle
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  return (
    <>
      {/* <Carausel /> */}
      <Feature />
      <div className="container mx-auto ">
        <div className="container mx-auto">
          {" "}
          <h1 className="text-xl text-center">All Products</h1>
        </div>

        <div className="productswrapper flex justify-center items-center flex-wrap bg-">
          {products.map((prod) => {
            return (
              <div
                className="mycard bg-white shadow-lg hover:shadow-2xl p-2 m-4  "
                key={prod.id}
              >
                
                  {" "}
                  <img
                    src={prod.imgUrl}
                    alt={prod.productName}
                    width={250}
                    height={180}
                    className="overflow-hidden"
                  />
              
                <div className="dsc my-2">
                  <h4 className="text-center">{prod.productName}</h4>
                  <h5 className="price text-center">$ {prod.price}</h5>
                  <div className="flex justify-between mx-2 items-center">
                    <p className="bg-purple-200 text-purple-600 px-2 rounded-full font-bold">
                      {prod.category}
                    </p>
                    <div className="rating flex justify-center items-center">
                      <p>{prod.reviews[0].rating} </p>&nbsp;
                      <p>
                        <FaStar className="text-yellow-500" />
                      </p>
                    </div>
                  </div>
                </div>
                {cartData ? (
                  <div className="flex justify-center my-2">
                    <button
                      onClick={() => HandleRemove(prod.id)}
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-1 rounded-full text-white"
                    >
                      Remove Item
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center my-2">
                    <button
                      onClick={() => Handleadd(prod)}
                      className="bg-purple-500 hover:bg-purple-600 px-4 py-1 rounded-full text-white"
                    >
                      Add Item
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default Products;
