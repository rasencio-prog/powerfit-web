import './Nosotros.css';
import equipoImg from '../assets/images/img5.jpg';

const Nosotros = () => {
  return (
    <div className="section nosotros-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Sobre <span className="text-accent">Nosotros</span></h2>
        <p className="section-subtitle">No solo construimos cuerpos, construimos confianza.</p>

        <div className="nosotros-content">
          <div className="nosotros-text">
            <h3>Nuestra Historia</h3>
            <p>
              PowerFit Center nació con la misión de revolucionar el fitness local. Empezamos en un espacio pequeño y hoy somos una comunidad apasionada. 
              Creemos que el entrenamiento es la base de una vida plena, y nos esforzamos por brindar un ambiente motivador donde cada persona, 
              sin importar su nivel, pueda alcanzar su mejor versión.
            </p>

            <h3>El Equipo</h3>
            <p>
              Nuestros entrenadores no solo tienen certificaciones internacionales, sino que viven y respiran el deporte. 
              Ellos están aquí para guiarte, cuidarte y empujarte más allá de tus límites de forma segura.
            </p>
          </div>
          
          <div className="nosotros-image">
            <img src={equipoImg} alt="Equipo de entrenadores de PowerFit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
