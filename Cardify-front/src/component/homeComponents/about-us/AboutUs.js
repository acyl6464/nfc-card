import React from 'react'
import "./aboutus.css"
function AboutUs() {
  return (
    <div className='about-us'>
        <div className='AboutUs_head'>
            <h1>Our Mission: Simplify Connections</h1>
            <p>At NFC Agadir, we believe in the power of technology to bring people closer. Our NFC cards are designed to make sharing your information seamless, professional, and memorable</p>
        </div>
        <div className='our'>
            <div className='info'>
                <img src="image/home page/ourmissionensvg.svg" alt="Our Mission" />
                <p>Simplify the way people share their information through smart, reliable, and innovative NFC solutions.</p>
            </div>
            <div  className='info' >
                <img src="image/home page/ourvaluesensvg.svg" alt="our values" />
                <p>To become the global leader in personalized NFC cards for professionals and businesses.</p>
            </div>
            <div className='info'>
                <img src="image/home page/ourvisionensvg.svg" alt="our vision" />
                <p>Always staying ahead with cutting-edge technology, ensuring that our solutions are easy for everyone to use .</p>
            </div>
        </div>

    </div>
  )
}

export default AboutUs