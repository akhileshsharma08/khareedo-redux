import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import data from '../data/products'
import '../App.css'
import { FaStar } from 'react-icons/fa'



const Home = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(data)
    },[])

    const Handleadd = (prod) => {
        dispatch(add(prod))
    }



    // console.log(data, "data")
    return (
        <>
            <div className="container mx-auto">
                <div className="productswrapper flex justify-center items-center flex-wrap bg-">
                    {products.map((prod) => {
                        return (
                            <div className="mycard shadow-lg hover:shadow-2xl p-2 m-2  " key={prod.id}>
                                <Link to={`/product/${prod.id}`}> <img src={prod.imgUrl} alt={prod.productName} width={250} height={180} className="overflow-hidden" /></Link>
                                <div className="dsc my-2">
                                    <h4 className="text-center">{prod.productName}</h4>
                                    <h5 className="price text-center">$ {prod.price}</h5>
                                    <div className="flex justify-between mx-2 items-center">
                                        <p className='bg-purple-200 text-purple-600 px-2 rounded-full font-bold'>{prod.category}</p>
                                        <div className="rating flex justify-center items-center">
                                            <p>{prod.reviews[0].rating}  </p>&nbsp;<p><FaStar className='text-yellow-500' /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center my-2"><button onClick={()=>Handleadd(prod)}  className='bg-purple-500 hover:bg-purple-600 px-2 py-1 rounded-full text-white'>Add Item</button></div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Home
