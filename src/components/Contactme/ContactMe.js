import React from "react";
import "../Contactme/ContactMe.css";

import emailjs from "emailjs-com";

import "./ContactMe.css";
import "../Button/Button.css";
import { default as heart } from "./heart.svg";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqgpkuj",
        "template_6sbo9eg",
        e.target,
        "user_VTnNjBm1JLligjgvQbxch",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  }

  return (
    <div className="contactme-container" id="contactme">
      <h2> Contact Me</h2>
      <p className="solveaproblem">
        <div class="heartparagraf">I’d</div>
        <img className="heart" src={heart} alt="heartsvg" />
        <div class="heartparagraf">to solve a problem</div>
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="number" />
        <label>Name</label>
        <input
          type="text"
          name="name"
          //   onchange={this.handleChange}
        />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" className="send btn btn--outline" value="Send" />
      </form>
      {/* <footer>2021 by bartlomiejra</footer> */}
    </div>
  );
}
