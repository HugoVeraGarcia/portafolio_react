import photo from '../assets/hugo_foto.png';
import angle from '../assets/angle_up.png'

export const Sobremi = () => {
  return (
    <>
      <a name="aboutme"></a>
      <div className='aboutme_container'>
        
        <div >
          <div id= "yourAnchorTag" className='section_title_angle'>
            <p className='section_title'>Acerca de mi</p>
            <a href="#header">
              <img className='img_angle' src={angle} alt="" />
            </a>
          </div>
          
          <p className='title'>FULL-STACK DEVELOPER</p>
          <p className='text'>Me encanta resolver problemas con ayuda de la tecnología. Mis conocimientos la carrera de desarrollador alcanza: HTML, CSS, JavaScript, React para el lado del cliente, y Node JS con Express por el lado del servidor. Actualmente desarrollo aplicaciones web pequeñas para un grupo de amigos emprendedores, terminé el Bootcamp de Academlo. Actualmente participando en un proyecto de No Country.</p>
        </div>
        <div><img className='photo' src={photo} alt="" /></div>
      </div>
    </>
  )
}
