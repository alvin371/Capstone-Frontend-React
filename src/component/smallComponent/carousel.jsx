import React, { useState } from 'react';
import { SliderData } from '../asset/sliderData';


const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const slides=SliderData

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='relative h-40 flex-row justify-center'>
      {/* <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} /> */}
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"  onClick={prevSlide}><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
      
      {/* <FaArrowAltCircleRight className='right-arrow' /> */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? ' transition ease-out' : 'transition ease-in'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='h-60' />
            )}
          </div>
        );
      })}
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" onClick={nextSlide} ><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
    </section>
  );
};

export default ImageSlider;