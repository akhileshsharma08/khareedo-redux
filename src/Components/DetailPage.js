import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import data from '../data/products'
// import {FaStar} from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
// import data from '../data/products'
import { FaStar } from 'react-icons/fa'
// import { STATUSES } from '../store/productSclice'
import { fetchProducts, setProducts } from '../store/productSclice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Triangle } from  'react-loader-spinner'

const DetailPage = () => {
  const dispatch = useDispatch()
  const [myproduct, setmyproduct] = useState({})
  // const permissionData = data.find(element => element.id === permission.id);
  const { id } = useParams()

  const { data: products, status } = useSelector((state) => state.product)
  useEffect(() => {
    // setProducts(data)
    const mysingledata = data.filter(item => item.id === id);
    setmyproduct(mysingledata[0])
    dispatch(fetchProducts())
  }, [])

  const Handleadd = (item) => {
    dispatch(add(item))
    toast.success("Product Added to Cart !")
}


  // console.log(myproduct, "gfg")
  // console.log(id, "lkl")

const item = myproduct

  return (
    <>
      <div className="container py-5 mx-auto">
        <div className="detailbox md:flex-row flex-col  flex justify-center items-center ">
          <div className="imgbox -1/4">
            <img src={myproduct.imgUrl} alt={myproduct.productName} width={500} height={400} />
          </div>
          <div className="textdetails p-5 w-3/4">
            <h1 className='text-2xl capitalize mt-4 mb-2 font-bold'>{myproduct.productName}</h1>
            <div className="category w-16">
              <p className='bg-purple-300 text-purple-600 px-4 rounded-full py-1  font-bold capitalize'>{myproduct.category}</p>
            </div>
            <p className='my-2'>{myproduct.description}</p>
            <h1 className='text-lg font-bold'> <strike className='text-gray-600'>$ {myproduct.price +50}</strike> <span className='mx-2'>${myproduct.price}</span>  </h1>
            <div className="ratingbox flex justify-start items-center">
              <h6>{myproduct.avgRating} </h6><span><AiFillStar className='text-yellow-400 text-lg ml-2' /></span>
            </div>
            <button onClick={() => Handleadd(item)} className='text-white text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-full my-2'>Add Item</button>
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

    </>
  )
}

export default DetailPage
