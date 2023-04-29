import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import {FaReact} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="logo">ARKAL <FaReact className="faReact" />  TECH</div>
      <div className='slogan'>Simplifying your digital life</div>
    </div>
  );
}

export default App;
