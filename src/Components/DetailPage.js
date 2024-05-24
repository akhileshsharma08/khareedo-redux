import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";
import fetchProducts from "../store/productSclice"; // Corrected import name
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const [myproduct, setMyProduct] = useState({});
  const { id } = useParams();
  const { status } = useSelector((state) => state.product);
  const products = useSelector((state) => state.product.data);
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  console.log(id);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (id && products.length > 0) {
      const foundProduct = products.find((item) => item.id === parseInt(id)); // Parse id to integer
      console.log(foundProduct,"fpp")
      if (foundProduct) {
        setMyProduct(foundProduct);
      } else {
        setMyProduct(null); 
      }
    }
  }, [id, products]);

  console.log(id, "id");
  console.log(products, "pro");

  const handleAddToCart = () => {
    dispatch(addItem(myproduct));
    toast.success("Product Added to Cart !");
  };

  return (
    <div className="container py-5 mx-auto">
      <div className="detailbox md:flex-row flex-col flex justify-center items-center">
        <div className="imgbox -1/4">
          <img
            src={myproduct.imgUrl}
            alt={myproduct.productName}
            width={500}
            height={400}
          />
        </div>
        <div className="textdetails p-5 w-3/4">
          <h1 className="text-2xl capitalize mt-4 mb-2 font-bold">
            {myproduct.productName}
          </h1>
          <div className="category w-16">
            <p className="bg-purple-300 text-purple-600 px-1 rounded-full py-1 font-bold capitalize">
              {myproduct.category}
            </p>
          </div>
          <p className="my-2">{myproduct.description}</p>
          <h1 className="text-lg font-bold">
            <strike className="text-gray-600">$ {myproduct.price + 50}</strike>{" "}
            <span className="mx-2">${myproduct.price}</span>{" "}
          </h1>
          <div className="ratingbox flex justify-start items-center">
            <h6>{myproduct.avgRating} </h6>
            <span>
              <AiFillStar className="text-yellow-400 text-lg ml-2" />
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="text-white text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full my-2"
          >
            Add
          </button>
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
  );
};

export default DetailPage;
