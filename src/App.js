import './App.css';
import Nav from './components/Nav.js';
import Pop from "./components/Pop.js";
import BestSection from './components/BestSection';
function App() {
  return (
    <div className="font-sans font-medium">
  <Nav/>
  <Pop/>
  <BestSection/>
    </div>
  );
}

export default App;
