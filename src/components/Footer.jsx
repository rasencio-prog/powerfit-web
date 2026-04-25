import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="PowerFit Center Logo" style={{ height: '200px', objectFit: 'contain' }} />
          </div>
          <p>Tu mejor estado físico comienza aquí. Únete hoy a PowerFit Center y forma parte de nuestra comunidad enfocada en la salud y la fuerza.</p>
        </div>
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/horarios">Horarios</Link></li>
            <li><Link to="/planes">Planes</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>Email: Contacto@powerfitcenter.cl</p>
          <p>Tel: +56 9 4451 1373</p>
          <p>Ubicación: Libertador bernardo O’Higgins 1316 entre piso</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PowerFit Center. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
