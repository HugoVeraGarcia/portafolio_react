import angle from '../assets/angle_up.png'
import poke from '../assets/proj1.PNG'
import weather from '../assets/weather.PNG'
import ecommerce from '../assets/ecommerce.PNG'
import django from '../assets/django.png'

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
            <a href="https://e-commerce-hugovera.netlify.app/" target="_blank">
              <img className='img_projects' src={ecommerce} alt="" />
            </a>
          </div>

          <div>
            <p className='title' >E-commerce App</p>
            <p className='text'>Tienda virtual que consume una API donde está la BD de los productos. Como elemento de seguridad, es necesario hacer login a la aplicación. Solo así es posible añadir productos al carrito, modificar las cantidades. No procesa pagos porque no es una tienda real.</p>
          </div>

          <div> 
            <a href="https://pokemon-hugovera.netlify.app/" target="_blank">
              <img className='img_projects' src={poke} alt="" />
            </a>
          </div>

          <div>
            <p className='title' > Pokedex App</p>
            <p className='text'>Aplicación que consume una API con grandes cantidades de información. Un trabajado especial en el diseño y colores. Aplicamos paginación para facilitar al usuario la carga de data. También un botón para cambiar entre un dark mode a light mode.</p>
          </div>

          <div> 
            <a href="https://hugovera-weather.netlify.app/" target="_blank">
              <img className='img_projects' src={weather} alt="" />
            </a>
          </div>

          <div>
            <p className='title' >WEATHER App</p>
            <p className='text'>Aplicación que proporciona datos del clima en tu ubicación. Debes dar permiso para leer tu ubicación y te entregará los datos: temperatura (°C | °F), humedad, velocidad del viento y presión. Cuenta con un conversor de °C y °F. Además por cada condición climática muestra una imagen de fondo que lo representa.</p>
          </div>

          <div> 
            <a href="https://django-auth-crud-l6cp.onrender.com/" target="_blank">
              <img className='img_projects' src={django} alt="" />
            </a>
          </div>

          <div>
            <p className='title' >Django App</p>
            <p className='text'>La aplicación desarrollada con Python y Django es una solución fácil y eficiente para administrar y organizar tareas. Con una interfaz intuitiva y fácil de usar, nuestra aplicación te permite crear, editar, eliminar y ver tareas de manera rápida y sencilla. Esta aplicación es perfecta para personas que buscan una forma organizada de administrar sus tareas diarias, ya sea en el trabajo o en la vida personal.</p>
            
          </div>

        </div>
      </div>
    </>
  )
}
