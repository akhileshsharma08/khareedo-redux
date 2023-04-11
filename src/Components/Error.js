import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='container flex justify-center items-center h-screen'>
      <div className="errorbox text-center">
        <h1 className='text-8xl text-center font-bold'>404 </h1>
        <h1 className='text-2xl text-gray-700 mb-4'>Page Not Found</h1>
        <Link to="/" className='text-lg text-purple-600 my-5'> Home Page</Link>
      </div>
    </div>
  )
}

export default Error
