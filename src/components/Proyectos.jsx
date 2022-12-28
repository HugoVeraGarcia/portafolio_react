import angle from '../assets/angle_up.png'
import poke from '../assets/proj1.PNG'
import weather from '../assets/weather.PNG'

export const Proyectos = () => {
  return (
    <>
      <a name="project"></a>
      <div className='projects_container'>
        <div className='section_title_angle'>
          <p className='section_title'>Proyectos</p>
          <a href="#header">
            <img className='img_angle' src={angle} alt="" />
          </a>
        </div>
        <div className='projects_div'>
        <div>
          <p className='title' > Pokedex App</p>
          <p className='text'>Aplicación que consume una API con grandes cantidades de información. Un trabajado especial en el diseño y colores. Aplicamos paginación para facilitar al usuario la carga de data. También un botón para cambiar entre un dark mode a light mode.</p>
        </div>

        <div> 
          <a href="https://pokemon-hugovera.netlify.app/" target="_blank">
            <img src={poke} alt="" />
          </a>
        </div>

        <div> 
          <a href="https://hugovera-weather.netlify.app/" target="_blank">
            <img src={weather} alt="" />
          </a>
        </div>

          <div>
            <p className='title' >WEATHER App</p>
            <p className='text'>Aplicación que proporciona datos del clima en tu ubicación. Debes dar permiso para leer tu ubicación y te entregará los datos: temperatura (°C | °F), humedad, velocidad del viento y presión. Cuenta con un conversor de °C y °F. Además por cada condición climática muestra una imagen de fondo que lo representa.</p>
          </div>

        </div>
      </div>
    </>
  )
}
