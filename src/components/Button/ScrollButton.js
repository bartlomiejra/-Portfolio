import React, { useState } from 'react';
import './ScrollButton.scss';
import { default as arrowup } from '../Skills/svg/arrow.svg';

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
