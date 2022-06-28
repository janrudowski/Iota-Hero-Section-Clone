import { React, useState, useEffect, useRef } from 'react';

import data from './../data';

import Slide from './Slide';

import Chevron from './Chevron';

export default function Hero() {
  const slideNumber = data.length;
  const svgRef = useRef(null);
  const changeSlideTime = 5;
  const [currentSlide, setCurrentSlide] = useState(1);

  let timer;

  function slideTimeOut() {
    timer = setTimeout(() => {
      setCurrentSlide(currentSlide === slideNumber ? 1 : currentSlide + 1);
    }, changeSlideTime * 1000);
    return timer;
  }

  useEffect(() => {
    slideTimeOut();
    svgRef.current.beginElement();
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  function prevSlide() {
    if (currentSlide === 1) {
      setCurrentSlide(slideNumber);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function nextSlide() {
    if (currentSlide === slideNumber) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const slides = data.map((el) => {
    return (
      <Slide
        key={el.id}
        id={el.id}
        src={el.src}
        title={el.title}
        text={el.text}
        isActive={currentSlide === el.id}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    );
  });
  return (
    <div className='heroes'>
      {slides}
      <Chevron
        direction='left'
        stroke='#8493ad'
        strokeWidth='2'
        fill='#181e32'
        class='loading-circle'
        animate={false}
        clickHandler={prevSlide}
        circleClass='chevron-circle-svg'
      />
      <Chevron
        direction='right'
        stroke='#8493ad'
        animationStroke='#00e0ca'
        fill='#181e32'
        class='loading-circle'
        duration={`${changeSlideTime + 0.8}s`} //there is an offset in svg animation
        strokeWidth='2'
        animate={true}
        clickHandler={nextSlide}
        ref={svgRef}
        circleClass='chevron-circle-svg'
      />
    </div>
  );
}
