// header.js
import React from 'react';
import './Hero.css';



const Hero = () => {
    return (
        <section>
            <img className='topo' src="image/home page/Topographic.svg" alt="Our Mission" />
            <div className='big-title'>
                <h2>Your Personalized NFC Card <br /> Share Your Info in a Tap</h2>
            </div>
            <div className='description'>
                <div className='call-to-action'>
                    <button className='getstarted'><a href="#getstarted">Get Started</a></button>
                    <div className='learn-more'>
                        <p>Or</p>
                        <img src="image/home page/justline.svg" alt="Our Mission" />
                        <button><a href="#learnmore">Learn more</a></button>
                    </div>
                </div>
                <div className='text'>
                    <p>
                        Customizable, professional, and easy to use. Your NFC card <br />
                        is the ultimate tool to elevate your networking experience. <br />
                        Whether you’re meeting clients, attending events, <br />
                        or connecting with colleagues, sharing your details has never been faster.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;