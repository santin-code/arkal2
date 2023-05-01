import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import FreeFire from "./components/freeFire/FreeFire";
import LogoTitle from "./components/logoTitle/LogoTitle";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
        <LogoTitle />
        <FreeFire />
        {/* <a href="https://www.flaticon.es/iconos-gratis/astronauta" title="astronauta iconos">Astronauta iconos creados por wanicon - Flaticon</a> */}
    </div>
  );
}

export default App;
