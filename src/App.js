import PricingCard from "./components/PricingCard.js";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Pricing table</h1>
      <div className="cards">
      <PricingCard 
        plan = "FREE"
        cost = "$0"
        users = "Single"
        storage = "5GB"
        icon1 = "&#10006;"
        icon2 = "&#10006;"
        icon3 = "&#10006;"
        icon4 = "&#10006;"
        i1 ="i-color"
        i2 = "i-color"
      />
      <PricingCard 
        plan = "PLUS"
        cost = "$9"
        users = "5 Users"
        storage = "50GB"
        icon1 = "&#10004;"
        icon2 = "&#10004;"
        icon3 = "&#10004;"
        icon4 = "&#10006;"
        i2 = "i-color"
      />
      <PricingCard 
        plan = "PRO"
        cost = "$49"
        users = "Unlimited Users"
        storage = "150GB"
        icon1 = "&#10004;"
        icon2 = "&#10004;"
        icon3 = "&#10004;"
        icon4 = "&#10004;"
      />
      </div>
    </div>
  );
}

export default App;
