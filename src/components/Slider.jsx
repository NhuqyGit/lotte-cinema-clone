import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
        <img src={images[currentIndex]} alt="Slider Image" />
        <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
