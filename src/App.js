import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import FreeFire from './components/freeFire/FreeFire';
import LogoTitle from './components/logoTitle/LogoTitle';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <LogoTitle />
      <FreeFire />
    </div>
  );
}

export default App;
