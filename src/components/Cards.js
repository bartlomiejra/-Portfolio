import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
	return (
		<div className="cards">
			<h1>Check out some of my projects and blog posts!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
				<ul className="cards__items">
						<CardItem
						
						src='images/img-9.jpg'
						text="
						A pomodore app to improve your productivity and manage your tasks"
						label="Project"
						path="/services"
						/>
								<CardItem
						
						src='images/img-3.jpg'
						text="My system implementing PARA Method
						"						label="Blog Post"
						path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
						
						src='images/img-5.jpg'
						text="A few words about digital minimalism"
						
						label="Blog Post"
						path="/services"
						/>
						<CardItem
						
						
						src='images/img-7.jpg'
						text="Recommendation of the best books, fiction and non-fiction"
						label="Blog Post"
						path="/services"
						/>
								<CardItem
						
						src='images/img-6.jpg'
						text="New and cool photo and blogpost"
						label="Blog Post"
						path="/services"
						/>
					</ul>
				</div>
				</div>	
		</div>
	)
}
 
 
 export default Cards
