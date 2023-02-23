import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';


function SlideText({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, slides.length]);

  return (
    <div className='slides'>
      {slides.map((slide, index) => (
        <CSSTransition
          key={index}
          in={index === currentIndex}
          classNames="slide"
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          <div className='slide-text'>
            <h3>{slide.text}</h3>
            <p>{slide.description}</p>
          </div>
        </CSSTransition>
      ))}
    </div>
  );
}
export default SlideText