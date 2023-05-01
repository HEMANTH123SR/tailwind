import './App.css';
import Nav from './components/Nav.js';
import Pop from "./components/Pop.js";
import BestSection from './components/BestSection';
import Slider from './components/Slider';
import Cards from './components/Cards';
import Info from './components/Info';
import Fotter from './components/Fotter';
function App() {
  return (
    <div className="font-sans font-medium">
  <Nav/>
  <Pop/>
  <BestSection/>
  <Slider/>
  <Cards/>
  <Info/>
  <Fotter/>
    </div>
  );
}

export default App;
