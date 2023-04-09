import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import data from '../data/products'
// import {FaStar} from 'react-icons/fa'

const DetailPage = ({prod}) => {
  const [products, setProducts] = useState([])
  const {prodid}=useParams()
  
  useEffect(() => {
    setProducts(data)
  },[])
  
  console.log(prodid,"gfg")
  // console.log(products,"lkl")

  const DetailProduct=()=>{
    return(
      <div className="detailwrapper">
        <div className="dtailbox">
          {products.map((item)=>{
            return(
              <h1>{item.productName}</h1>
              
              )
          })}
        </div>
      </div>
    )
  }

  return (
    <>
    {/* <h2>canmnm kjkj</h2> */}
      
       {products.id === prodid?<DetailProduct/> :"no product found"}
    </>
  )
}

export default DetailPage
