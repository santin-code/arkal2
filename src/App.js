import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import {TfiPrinter} from "react-icons/tfi"
import {GiMarsCuriosity} from "react-icons/gi"
import {FcMindMap} from "react-icons/fc"
import {FcCommandLine} from "react-icons/fc"

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div className="logo">ARKAL <FcCommandLine className="curiosity" />  TECH</div>
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
