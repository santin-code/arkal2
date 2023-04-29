// INSTALAMOS EN LA CONSOLA REACT-TSPARTICLES Y TSPARTICLES DE LO CONTRARIO NO VA A FUNCIONAR
// DESPUES IMPORTAMOS "USECALLBACK", PARTICLES FROM REACT-TSPARTICLES, LOADFULL FROM TSPARTICLES
// Y "PARTICLESCONFIG" QUE EN REALIDAD ES EL JSON QUE DESCARGAMOS COMO CONFIGURACION
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particles-config'

const ParticlesBackground = () => {
  // EN PALABRAS SIMPLES ESTE ES EL COMPONENTE QUE HACE NUESTRAS PARTICULAS.
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    },[] )
  return (
    <div>
        <Particles 
         id = "tsparticles"
         options = {particlesConfig}
        init = {particlesInit}
        />
    </div>
  )
}

export default ParticlesBackground