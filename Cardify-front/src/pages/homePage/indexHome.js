import Header from "../../component/homeComponents/header/Header";
import Hero from "../../component/homeComponents/Hero/Hero";
import HowItWorks from "../../component/homeComponents/howitworks/HowItWorks";
import AboutUs from "../../component/homeComponents/about-us/AboutUs";
import Cards from "../../component/homeComponents/Personalised-cards/cards";


export default function IndexHome() {
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
