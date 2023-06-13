import React, { useState } from "react";

const Checkout = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [pincode,setPincode] = useState("")
    const [landmark,setLandmark] = useState("")
    const [address,setAddress] = useState("")
    const {orderDetail,setOrderDetail} = useState({})
    const [error, seterror] = useState("")


    const handleCheckout=(e)=>{
e.preventDefault()
if(!name||!email||!phone||!pincode||!landmark||!address){
    seterror("all fields cannot be empty ")

}
// if(!name ){
//     seterror("Name cannot be empty ")
// }
// else if(!email)seterror("Email cannot be Empty")
// else if(!phone)seterror("phone cannot be Empty")
// else if(!pincode)seterror("pincode cannot be Empty")
// else if(!landmark)seterror("landmark cannot be Empty")
// else if(!address)seterror("address cannot be Empty")

else{
    setOrderDetail(name,email,phone,address,landmark,pincode)
    console.log(orderDetail,"order data")
}
    }
  return (
    <div>
      <div className="container  mx-auto mb-20">
        <h2 className="text-center my-8 text-4xl text-gray-900">
          Delivery Details
        </h2>
    
        <span className="text-red-700 font-bold text-center my-1">** {error}</span>
            
        

        <div className=" flex justify-between items-center md:flex-row flex-col">
          <div className="div md:w-1/2 w-full px-12 ">
            <form>
              <input
                type="text"
                name="name"
                className="w-full my-2 px-4 py-2 rounded"
                placeholder="Enter Name"
                onChange={(e)=>{setName(e.target.value)}}

              /> 
              {/* <span className="text-red-500 my-1">{error}</span> */}

              <div className="flex md:flex-row flex-col justify-start items-center">
                <div className="input mr-1 md:w-1/2 w-full">
                  <input
                    type="email"
                    name="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Email"
                  />
                  {/* <span className="text-red-500 my-1">{error}</span> */}
                </div>
                <div className="input md:w-1/2 w-full">
                  <input
                    type="phone"
                    name="phone"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Phone"
                    onChange={(e)=>{setPhone(e.target.value)}}

                  />
                  {/* <span className="text-red-500 my-1">{error}</span> */}
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-start items-center">
                <div className="input mr-1 md:w-1/2 w-full">
                  <input
                    type="text"
                    name="pincode"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Pincode"
                    onChange={(e)=>{setPincode(e.target.value)}}

                  />
                  {/* <span className="text-red-500 my-1">{error}</span> */}
                </div>
                <div className="input md:w-1/2 w-full">
                  <input
                    type="text"
                    name="landmark"
                    className="w-full my-2 px-4 py-2 rounded"
                    placeholder="Enter Landmark"
                    onChange={(e)=>{setLandmark(e.target.value)}}

                  />
                  {/* <span className="text-red-500 my-1">{error}</span> */}
                </div>
              </div>
              {/* <input type="text" name="name" className="w-full my-2 px-4 py-2 rounded" placeholder="Enter Name"/> */}
              <textarea
                className="my-2 w-full"
                placeholder="Full Address..."
                name="address"
                id="address"
                cols="10"
                rows="5"
                onChange={(e)=>{setAddress(e.target.value)}}

              ></textarea>
              {/* <span className="text-red-500 my-1">{error}</span> */}
            </form>
          </div>
          <div className="md:w-3/5  w-full flex justify-center items-center ">
            <div className="card md:w-3/5 w-full bg-white md:p-6 px-8 mx-12 text-center">
              <div className="ordersummery mx-4">
                <h2 className="my-2 text-2xl"> 3 items in your cart</h2>
                <hr  className="my-1 shadow-lg"/>

                <ul>
                  <li>item name and pic </li>
                </ul>
                <hr  className="my-1"/>
                <h2 className="my-2 text-2xl">Total : 12563</h2>
                <hr  className="my-1"/>
                <div className="btnalign mx-auto flex justify-center items-center">

                <button onClick={handleCheckout} className="my-2 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded">
                  Checkout
                </button>
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
