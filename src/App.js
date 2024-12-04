import './App.css';
import Banner from './component/Banner/Banner';
import Header from './component/header/Header';
import HowItWorks from './component/howitworks/HowItWorks';
import NFCCardPriceCalculator from './component/Pricing/NFCCardPriceCalculator';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <HowItWorks/>
      <NFCCardPriceCalculator/>
    </div>
  );
}

export default App;
