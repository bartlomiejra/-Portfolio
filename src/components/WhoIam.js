import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './WhoIam.css'

function WhoIam() {
	return (
		<div className="whoiam-container">
			<section className="whoiam-subscription">

				<p className="whoiam-subscription-heading">
					About Me
				</p>
	
				{/* <p className="whoiam-subscription-text">
					You can unsubscribe at any time
				</p>
				<div className="input-areas">
					<form >
<input type="emial" name="emial" placeholder="Your Email" className="whoiam-input" />
<Button buttonStyle="btn--outline"> Subscribe	

</Button>

					</form>
				</div> */}
			
			</section>



			 <div className='whoiam-links'>
        <div className='whoiam-link-wrapper'>
          {/* <div className='whoiam-link-items'> */}
            {/* <h2>About Us</h2> */}
            {/* <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          {/* </div> */}
          {/* <div className='whoiam-link-items'> */}
            {/* <h2>Contact Us</h2> */}
            {/* <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          {/* </div> */}
        </div>
        <div className='whoiam-link-wrapper'>
          {/* <div class='whoiam-link-items'> */}
            {/* <h2>Videos</h2> */}
            {/* <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          {/* </div> */}
          {/* <div className='whoiam-link-items'> */}
            {/* <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          {/* </div> */}
        </div>
      </div>
	  <section className='social-media'>
        <div className='social-media-wrap'>
         
          <div className='social-icons'>
            <Link
              className='social-icon-link github'
              to='https://github.com/bartlomiejra'
              target='_blank'
              aria-label='Github'
            >
              <i className='fab fa-github' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/mitchofminify/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
           
            <Link
              className='social-icon-link twitter'
              to='https://twitter.com/rachanski_b'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link goodreads'
              to='https://www.goodreads.com/user/show/111194458-mitchofminify'
              target='_blank'
              aria-label='Goodreads'
            >
              <i className='fab fa-goodreads' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoIam;