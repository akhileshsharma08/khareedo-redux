import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HeroImage from "../images/hero-img.png";
import Table from "../images/table.jpg";
import Phone from "../images/counter-timer-img.png";
import Sofa from "../images/double-sofa-02.png";
import "../App.css";

const Carausel = () => {
  const myList = [
    {
      id: 1,
      image: HeroImage,
      title: "Premium Quality Furniture",
      text: "Ceremony Offer ,Hurry",
      color: "bg-blue-200",
    },
    {
      id: 2,
      image: Sofa,
      title: "Extra Premium Quality Sofa",
      text: "Ceremony Offer ,Hurry",
      color: "bg-green-300",
    },
    {
      id: 3,
      image: Phone,
      title: "Blue Belbet Chair",
      text: "Ceremony Offer ,Hurry",
      color: "bg-yellow-200",
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1500}
        interval={2500}
        showArrows={false}
        showThumbs={false}
      >
        {myList.map((item) => (
          <div className={`w-full h-96 p-4 ${item.color}`} key={item.id}>
            <div className="flex justify-center items-center">
              <div className="text w-1/2 my-4 justify-center flex items-center">
                <div>
                  <h1 className="text-2xl font-bold">{item.title} </h1>
                  <p>{item.text}</p>
                  <button className="px-4 py-2 bg-gray-200 text-black my-2 text-lg hover:bg-gray-300">
                    Know More
                  </button>
                </div>
              </div>
              <div className="img w-1/2">
                <img
                  src={item.image}
                  width={100}
                  height={300}
                  alt={item.title}
                  className="myimgcara"
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carausel;
