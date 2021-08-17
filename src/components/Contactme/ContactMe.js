import React from "react";
import "../Contactme/ContactMe.css";

import emailjs from "emailjs-com";

import "./ContactMe.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
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
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="number" />
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          //   onchange={this.handleChange}
        />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="email" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
