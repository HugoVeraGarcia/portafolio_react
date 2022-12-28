//import logo from './logo.svg';
import './App.css';
import {Navbar, Soy, Sobremi, Conocimientos, Proyectos, Contactame}  from './components'


function App() {
  return (
    <>
      <div className="main_container">
        <div className="navbar_container">
         <Navbar/>
        </div>
        <div className="soy_container">
          <Soy/>
        </div>
        <div className="Sobremi_container">
          <Sobremi/>
        </div>
        <div className="conocimientos_container">
          <Conocimientos/>
        </div>
        <div className="proyectos_container">
          <Proyectos/>
        </div>
        <div className="contactame_container">
          <Contactame/>
        </div>



      </div>
    </>
  );
}

export default App;
