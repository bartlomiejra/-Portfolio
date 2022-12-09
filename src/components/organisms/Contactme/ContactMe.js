import React from 'react';
import './ContactMe.css';

// import emailjs from 'emailjs-com';
import './ContactMe.css';
import '../../atoms/Button/Button.css';
import { default as heart } from './heart.svg';
import { motion } from 'framer-motion';
import { cardAnimation } from '../../../assets/Animation';
import { useScroll } from '../../../assets/useScroll';
export default function ContactUs() {
  //   function sendEmail(e) {
  //     e.preventDefault();

  //     emailjs
  //       .sendForm(
  //         'service_uqgpkuj',
  //         'template_6sbo9eg',
  //         e.target,
  //         'user_VTnNjBm1JLligjgvQbxch',
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text);
  //         },
  //         (error) => {
  //           console.log(error.text);
  //         },
  //       );
  //     e.target.reset();
  //   }

  const [element, controls] = useScroll();
  return (
    <div className="contactme-container" id="contactme" ref={element}>
      <motion.h2
        animate={controls}
        transition={{ dalay: 0.2, type: 'tween' }}
        ref={element}
        variants={cardAnimation}
      >
        {' '}
        Contact Me
      </motion.h2>
      <motion.p
        animate={controls}
        transition={{ dalay: 0.2, type: 'tween' }}
        variants={cardAnimation}
        className="solveaproblem"
      >
        <div className="heartparagraf">I’d</div>
        <img className="heart" src={heart} alt="heartsvg" />
        <div class="heartparagraf">to solve a problem</div>
      </motion.p>
      <motion.form
        animate={controls}
        transition={{ dalay: 0.2, type: 'tween' }}
        variants={cardAnimation}
        className="contact-form"
        // onSubmit={sendEmail}
      >
        <input type="hidden" name="number" />
        <label>Name</label>
        <input
          type="text"
          name="name"
          aria-label="name"
          //   onchange={this.handleChange}
        />
        <label>Email</label>
        <input type="email" aria-label="email" name="email" />
        <label>Subject</label>
        <input type="text" aria-label="subject" name="subject" />
        <label>Message</label>
        <textarea aria-label="message-text" name="message" />
        <input type="submit" className="send btn btn--outline" value="Send" />
      </motion.form>
      {/* <footer>2021 by bartlomiejra</footer> */}
    </div>
  );
}
