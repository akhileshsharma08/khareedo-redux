import React from 'react'
import { RiSecurePaymentLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiRefund2Fill } from 'react-icons/ri'
import { MdHighQuality } from 'react-icons/md'

const Feature = () => {
    return (
        <>
            <div className=" container flex justify-center flex-wrap mx-auto my-4">
                <div className="p-2 md:w-1/4 w-full transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="h-full justify-around  flex items-center border-gray-200 border p-4 bg-green-200 shadow-lg">
                        <div className="box">

                            <TbTruckDelivery className='bg-white text-purple-600 w-16 h-16 rounded-full p-4' />
                        </div>
                        <div className="flex-grow   mx-4">
                            <h2 className="text-gray-900 title-font font-medium">Fast Delivery </h2>
                            {/* <p className="text-gray-500">Lorem ipsum dolor sit amet, conse</p> */}
                        </div>
                    </div>
                </div>
                <div className="p-2 md:w-1/4 w-full transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="h-full justify-around  flex items-center border-gray-200 border p-4 bg-green-200 shadow-lg">
                        <div className="box">

                            <RiSecurePaymentLine className='bg-white text-purple-600 w-16 h-16 rounded-full p-4' />
                        </div>
                        <div className="flex-grow   mx-4">
                            <h2 className="text-gray-900 title-font font-medium">Secure Payment </h2>
                            {/* <p className="text-gray-500">Lorem ipsum dolor sit amet, conse</p> */}
                        </div>
                    </div>
                </div>
                <div className="p-2 md:w-1/4 w-full transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="h-full justify-around  flex items-center border-gray-200 border p-4 bg-green-200 shadow-lg">
                        <div className="box">

                            <RiRefund2Fill className='bg-white text-purple-600 w-16 h-16 rounded-full p-4' />
                        </div>
                        <div className="flex-grow   mx-4">
                            <h2 className="text-gray-900 title-font font-medium">Easy Refund </h2>
                            {/* <p className="text-gray-500">Lorem ipsum dolor sit amet, conse</p> */}
                        </div>
                    </div>
                </div>
                <div className="p-2 md:w-1/4 w-full transition ease-in-out delay-100 cursor-pointer hover:-translate-y-1 hover:scale-110  duration-300">
                    <div className="h-full justify-around  flex items-center border-gray-200 border p-4 bg-green-200 shadow-lg">
                        <div className="box">

                            <MdHighQuality className='bg-white text-purple-600 w-16 h-16 rounded-full p-4' />
                        </div>
                        <div className="flex-grow   mx-4">
                            <h2 className="text-gray-900 title-font font-medium">100% Quality  </h2>
                            {/* <p className="text-gray-500">Lorem ipsum dolor sit amet, conse</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Feature
