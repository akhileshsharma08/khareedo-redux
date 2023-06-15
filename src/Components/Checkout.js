import React, { useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");
  const [address, setAddress] = useState("");
  const [orderDetail, setOrderDetail] = useState([]);
  const [error, seterror] = useState("");
  const [total, setTotal] = useState("");
  const items = useSelector((state) => state.cart)
  const navigate = useNavigate()


  // razorpay integration
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  let orderobj = {
    name,
    email,
    phone,
    address,
    landmark,
    pincode,
  };

  const HandlePayment = async (total) => {
    if (!name || !email || !phone || !pincode || !landmark || !address) {
      seterror(" ** all fields cannot be empty ");
    } else {
      setOrderDetail(orderobj);
      localStorage.setItem("user", JSON.stringify(orderobj));
      const a = localStorage.getItem("user");
      console.log(a, "lstrg");
    
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("failed to load reazorpay ");
      return;
    }

    const options = {
      key: "rzp_test_wDye2ggKElE5bB",
      currency: "USD",
      amount: total * 100,
      name: "khareedo.com",
      description: "thanks for payment ",
      image:
        "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        localStorage.setItem("RzrID", response.razorpay_payment_id);
        alert("payment successfull");
        navigate('/')
      },
      prefill: {
        name: name,
        email:email,
        phone:phone
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }}

  const onToken = (token) => {
    if (!name || !email || !phone || !pincode || !landmark || !address) {
      seterror(" ** all fields cannot be empty ");
    } else {
    console.log(token, "token");
    }
  };

  useEffect(() => {
    let mytotal = localStorage.getItem("total", JSON.stringify(total));
    setTotal(mytotal);
    console.log("total", total);
  });

  return (
    <div>
      <div className="container  mx-auto mb-20">
        <h2 className="text-center my-8 text-4xl text-gray-900">
          Delivery Details
        </h2>

        <span className="text-red-700 font-bold text-center my-1">{error}</span>

        <div className=" flex justify-between items-center md:flex-row flex-col">
          <div className="div md:w-1/2 w-full px-12 ">
            <form>
              <input
                type="text"
                name="name"
                className="w-full my-2 px-4 py-2 rounded"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <div className="flex md:flex-row flex-col justify-start items-center">
                <div className="input mr-1 md:w-1/2 w-full">
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="input md:w-1/2 w-full">
                  <input
                    type="phone"
                    name="phone"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-start items-center">
                <div className="input mr-1 md:w-1/2 w-full">
                  <input
                    type="text"
                    name="pincode"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Pincode"
                    onChange={(e) => {
                      setPincode(e.target.value);
                    }}
                  />
                </div>
                <div className="input md:w-1/2 w-full">
                  <input
                    type="text"
                    name="landmark"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Landmark"
                    onChange={(e) => {
                      setLandmark(e.target.value);
                    }}
                  />
                </div>
              </div>
              <textarea
                className="my-2 w-full"
                placeholder="Full Address..."
                name="address"
                id="address"
                cols="10"
                rows="5"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></textarea>
            </form>
          </div>
          <div className="md:w-3/5  w-full flex justify-center items-center ">
            <div className="card md:w-3/5 w-full bg-white md:p-6 px-8 mx-12 text-center">
              <div className="ordersummery mx-4">
                <h2 className="my-2 text-2xl"> {items.length} items in your cart</h2>
                <hr className="my-1 shadow-lg" />

                <ul>
                  {/* <li>item name and pic </li> */}
                </ul>
                <hr className="my-1" />
                <h2 className="my-2 text-2xl">Total : ${total}</h2>
                <hr className="my-1" />
                <div className="btnalign mx-auto flex justify-center items-center">
                  <button
                    onClick={() => HandlePayment(total)}
                    className="my-2 px-4 py-1 mx-1 text-white bg-purple-600 hover:bg-purple-700 rounded"
                  >
                    Pay Now
                  </button>
                  <StripeCheckout
                    token={onToken}
                    name="Khareedo.com"
                    amount={total + "00"}
                    stripeKey="pk_test_51NJ88ASGAB8KUcfLMRaOcUjzmIcyl0guf0mUIeeBVgsodYgiCsG3rCQCTqlTMQQalD6nd7nuqpU0Oi2TRe16tZj20035S7Zwnu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
