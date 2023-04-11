import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeroImage from '../images/hero-img.png'
import Table from '../images/table.jpg'
import Phone from '../images/counter-timer-img.png'
import Sofa from '../images/double-sofa-02.png'
import '../App.css'


const Carausel = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1500} interval={2500} showArrows={false} showThumbs={false}>

                <div className='w-full h-96 p-4 bg-blue-200'>
                    <div className="flex justify-center items-center">
                        <div className="text w-1/2 my-4 justify-center flex items-center">
                            <div>
                                <h1 className='text-2xl font-bold'>Premium Quality Furniture </h1>
                                <p>Ceremony Offer ,Hurry</p>
                                <button className="px-4 py-2 bg-gray-200 text-black my-2 text-lg hover:bg-gray-300"> Know More</button>
                            </div>

                        </div>
                        <div className="img w-3/4">
                            <img src={HeroImage} width={100} height={200} className='myimgcara'/>
                        </div>
                    </div>

                </div>
                <div className='w-full h-96 p-4 bg-green-300'>
                    <div className="flex justify-center items-center">
                        <div className="text w-1/2">
                        <div>
                                <h1 className='text-2xl font-bold'>Extra Premium Quality Sofa </h1>
                                <p>  Ceremony Offer ,Hurry Up</p>
                                <button className="px-4 py-2 bg-gray-200 text-black my-2 text-lg hover:bg-gray-300"> Know More</button>
                            </div>
                        </div>
                        <div className="img w-3/4">
                            <img src={Sofa} width={100} height={100} className='myimgcara' />
                        </div>
                    </div>

                </div>
                <div className='w-full h-96 p-4 bg-yellow-200'>
                    <div className="flex justify-center items-center">
                        <div className="text w-1/2">
                        <div>
                                <h1 className='text-2xl font-bold'>Blue Belbet Chair  </h1>
                                <p>Ceremony Offer ,Hurry Up </p>
                                <button className="px-4 py-2 bg-gray-200 text-black my-2 text-lg hover:bg-gray-300"> Know More</button>
                            </div>
                        </div>
                        <div className="img w-3/4">
                            <img src={Phone} width={100} height={200} className='myimgcara' />
                        </div>
                    </div>

                </div>

            </Carousel>
        </div>
    )
}

export default Carausel
