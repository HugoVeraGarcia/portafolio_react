import logo from '../assets/hugo_logo.png';
import '../styles/components_styles.css'
//npm install --save react-router-hash-link
//import { HashLink as Link } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <>
      <a name="header"></a>
      <div className='navbar_div'>
        
        <div></div>
        <div> <img src={logo} alt="" /></div>
        <a href="#aboutme"> <p >Acerca de mi</p></a>
        <a href="#knowledge"><p>Conocimientos</p></a>
        <a href="#project"> <p>Mis proyectos</p></a>
        <a href="#contact"> <p>Contáctame</p></a>
      </div>
    </>
  )
}
