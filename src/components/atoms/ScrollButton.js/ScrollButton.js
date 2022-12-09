import React, { useState } from 'react';
import './ScrollButton.css';
import { default as arrowup } from '../../../assets/svg/arrow.svg';
// import { default as linkedin } from '../../../assets/svg/linkedin.svg';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className="scroll"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <img src={arrowup} alt="arrowup" className="arrowup" />
    </button>
  );
};
export default ScrollButton;
