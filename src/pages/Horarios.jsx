import './Horarios.css';

const Horarios = () => {
  return (
    <div className="section horarios-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Nuestros <span className="text-accent">Horarios</span></h2>
        <p className="section-subtitle">Encuentra el momento perfecto para entrenar.</p>

        <div className="horarios-container">
          <div className="horario-card">
            <h3>Atención General</h3>
            <ul>
              <li><span>Lunes a Viernes:</span> 06:00 - 22:00</li>
              <li><span>Sábados:</span> 08:00 - 20:00</li>
              <li><span>Domingos y Feriados:</span> 09:00 - 14:00</li>
            </ul>
          </div>
          
          <div className="horario-card">
            <h3>Clases Grupales</h3>
            <ul>
              <li><span>Mañanas:</span> 07:00, 08:00, 09:00</li>
              <li><span>Tardes:</span> 18:00, 19:00, 20:00</li>
              <li><span>Sábados:</span> 09:00, 10:00</li>
            </ul>
            <p className="nota">* Consulta la disponibilidad diaria en recepción o WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horarios;
