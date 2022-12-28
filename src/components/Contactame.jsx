import angle from '../assets/angle_up.png';
import { Link } from 'react-router-dom';

export const Contactame = () => {
  return (
    <>
      <a name="contact"></a>
      <div className='contactame_container'>
        <div className='section_title_angle'>
            <p className='section_title'>Contáctame</p>
            <a href="#header">
              <img className='img_angle' src={angle} alt="" />
            </a>
        </div>
        <div className='elements_container'>
          <div className='contact_elements'>
            <p className='element'>correo :</p>
            <p className='element'>hugo.vera.garcia@gmail.com</p>
          </div>
          <div className='contact_elements'>
            <p className='element'>curriculum vitae :</p>
            <a class="link_cv" href="https://drive.google.com/file/d/1MjWWcZ5tzUZlr6uX6gmdKFZIdJRwRBXq/view?usp=sharing" target="_blank">
              <p className='element'>download</p>
            </a>
            
              
            
          </div>
          <div className='contact_elements'>
            <p className='element'>teléfono :</p>
            <p className='element'>51+ 940 179 987</p>
          </div>
        </div>

      </div>
    </>
  )
}
