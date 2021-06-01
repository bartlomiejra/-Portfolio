import React from 'react'

import '../App.css';
import { Button } from './Button';
import './Hero.css';
import  { Component } from 'react';
import Typist from 'react-typist';
import Particles from 'react-particles-js';
import 'react-typist/dist/Typist.css';



function Hero() {

	
		
		
	
	  
	return (

		
		<div className="hero-container">
			

			 
               
			<Particles className="particle-canvas"
	params={{
	    "particles": {

		
			
	        "number": {
	            "value": 30
	        },
			"anim": {
				"speed": 0.3,
				"size_min": 0.1
			},
	        "size": {
	            "value": 1,
				"anim": {
	                "speed": 0.3,
	                "size_min": 0.1
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
			  
			{/* <video src="/videos/video.mov"  type="video/quicktime"  autoPlay loop muted /> */}
			
			<img src='images/avatar.jpg' alt="profil"></img>


	<Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}
     avgTypingDelay={50}
  
    >

<h1>Hello friend</h1>

<Typist.Backspace count={13} delay={2000} />
{/* <cursor show={false} /> */}



<Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}
     avgTypingDelay={0}
  
    />
	<h2 className="icon"> 
		 
		 💻 
			 </h2>
<p className="name"> I'm Bart </p>	
		  <p> 
		 
		 Front-end developer 🚀 from Poland 


</p>

				
			
			  	</Typist>

			


    
		
  
			<p>
	
  </p>
			
			<div className="hero-btns">

			<Button className='btns' buttonStyle='btn--outline'
				buttonSize='btn--large'>
					About Me


				</Button>
				<Button className='btns' buttonStyle='btn--outline'
				buttonSize='btn--large'>
					Skills


				</Button>
				<Button className='btns' b buttonStyle='btn--outline'
				buttonSize='btn--large'>My Project


				</Button>

			
				
			
			</div>

		</div>

		
	)
}

export default Hero
