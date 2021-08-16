import React from "react";
import CardItem from "../Cards/CardItem";
import "../Cards/Cards.css";

function Cards() {
  return (
    <div className="cards" id="project">
      <h1>Check out some of my projects and blog posts!</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="
						A pomodore app to improve your productivity and manage your tasks"
              label="Project"
              href="https://bartlomiejra.github.io/toDoPomodoro/
           "
            />
            <CardItem
              src="images/img-6.png"
              text="Travel Agencies page "
              label="Project"
              href="https://restor.net.pl/"
            />

            <CardItem
              src="images/img-3.jpg"
              text="My system implementing PARA Method
						"
              label="Blog Post"
              href="https://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="A few words about digital minimalism"
              label="Blog Post"
              href="https://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Recommendation of the best books, fiction and non-fiction"
              label="Blog Post"
              href="https://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function"
            />
          </ul>
          <h3> </h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
