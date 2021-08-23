import React from "react";
// import { Button } from "../Button/Button";
import "./WhoIam.css";

function WhoIam() {
  return (
    <div className="whoiam-container" id="whoiam">
      <img className="photo" src="images/avatar4.png" alt="profil"></img>

      <section className="whoiam-text">
        <p>
          I think the value of a human being is how he helps mankind. I want to
          create websites and an application that will be both beautiful and
          functional. When creating my projects, I focus on pragmatism and
          accessibility
        </p>
      </section>
      <span className="dot"></span>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              href={"https://github.com/bartlomiejra"}
              className="social-icon-link github"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href={
                "https://www.linkedin.com/in/bart%C5%82omiej-racha%C5%84ski-5aa782137/"
              }
              aria-label="Goodreads"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href={"https://www.instagram.com/mitchofminify/"}
              className="social-icon-link instagram"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="social-icon-link twitter"
              href={"https://twitter.com/rachanski_b"}
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link goodreads"
              href={
                "https://www.goodreads.com/user/show/111194458-mitchofminify"
              }
              aria-label="Goodreads"
            >
              <i className="fab fa-goodreads" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoIam;
