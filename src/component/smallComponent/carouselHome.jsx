import React, { useState } from 'react';
import { SliderData } from '../asset/sliderData';

const Carousel2 = () => {
  const [current, setCurrent] = useState(0);
  const [currentNext, setCurrentNext] = useState(2);
  const length = SliderData.length;
  const slides = SliderData;

  const nextSlide = () => {
    setCurrent(current + 3);
    setCurrentNext(currentNext + 3);
  };

  const prevSlide = () => {
    setCurrent(current - 3);
    setCurrentNext(currentNext - 3);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div class="flex justify-between space-x-2 m-6 py-4 border-t-2 border-b-2 border-gray-dark">
     
         <svg
        className={current!=0?"control-2 w-10 h-10 ml-2 md:ml-10 cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto":"hidden " }
        fill="none"
        onClick={prevSlide}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
     
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current ? "m-auto transition ease-out" : "transition ease-in"
            }
            key={index}
          >
            {index >= current && index <= currentNext && (
              <img src={slide.image} alt="travel image" className="h-60" />
            )}
          </div>
        );
      })}
      <svg
        className={current<length-3? "control-2 w-10 h-10 mr-2 md:mr-10 cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto":"hidden"}
       
        onClick={nextSlide}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>

    </div>
  );
};

export default Carousel2;
