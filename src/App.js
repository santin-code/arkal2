import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import {TfiPrinter} from "react-icons/tfi"
import {FaReact} from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="logo">ARKAL <FaReact className="faReact" />  TECH</div>
      NUESTROS SERVICIOS
      <ul>
        <li>
          <TfiPrinter />
          IMPRESIONES A <span></span>
          <span>C</span>
          <span>O</span>
          <span>L</span>
          <span>O</span>
          <span>R</span><span> </span>
          
           Y BLANCO Y NEGRO
        </li>
      </ul>
    </div>
  );
}

export default App;
