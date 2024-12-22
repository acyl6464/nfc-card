import React from 'react';
import AboutUs from '../../component/about-us/AboutUs';
import Cards from '../../component/Personalised cards/cards';
import Header from '../../component/header/Header';
import Hero from '../../component/Hero/Hero';
import HowItWorks from '../../component/howitworks/HowItWorks';


export default function Home() {
  return (
    <div> 
        <Header />
        <Hero />
        <HowItWorks/>
        <AboutUs/>
        <Cards/>
    </div>
  )
}
