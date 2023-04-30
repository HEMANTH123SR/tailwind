import './App.css';
import Nav from './components/Nav.js';
import Pop from "./components/Pop.js";
import BestSection from './components/BestSection';
import Slider from './components/Slider';
function App() {
  return (
    <div className="font-sans font-medium">
  <Nav/>
  <Pop/>
  <BestSection/>
  <Slider/>
    </div>
  );
}

export default App;
