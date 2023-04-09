import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <>
      <header className="text-gray-600 body-font shadow-lg">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <h3 className="ml-3 text-xl uppercase text-xl hover:text-purple-600">Khareedo </h3>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-purple-600 fs-2 font-bold text-lg">Home</Link>
            <Link to="/products" className="mr-5 hover:text-purple-600 fs-2 font-bold text-lg">Products</Link>
            <Link to="/cart" className="mr-5 hover:text-purple-600 fs-2 font-bold text-lg">Cart</Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0">
            <HiShoppingBag className='text-3xl fs-1 text-purple-600' /><span className=' bg-purple-600 text-white rounded-full px-2'>{!items?"":items.length}</span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
