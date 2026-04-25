import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="section contact-page" style={{ paddingTop: '120px' }}>
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{textAlign: 'left'}}>Ponte en <span className="text-accent">Contacto</span></h2>
          <p className="section-subtitle" style={{textAlign: 'left'}}>Estamos aquí para ayudarte. Mándanos un mensaje y te responderemos lo más pronto posible.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-wrapper"><MapPin className="text-accent" size={24}/></div>
              <div>
                <h4>Ubicación</h4>
                <p>Libertador bernardo O’Higgins 1316 entre piso</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper"><Phone className="text-accent" size={24}/></div>
              <div>
                <h4>Teléfono</h4>
                <p>+56 9 4451 1373</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon-wrapper"><Mail className="text-accent" size={24}/></div>
              <div>
                <h4>Email</h4>
                <p>Contacto@powerfitcenter.cl</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="tu@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" rows="5" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <Button variant="primary" className="full-width">Enviar Mensaje</Button>
          <a href="https://wa.me/56944511373" target="_blank" rel="noreferrer" style={{textDecoration: 'none', display: 'block', marginTop: '16px'}}>
            <Button variant="outline" className="full-width" style={{borderColor: '#25D366', color: '#25D366'}}>Contactar por WhatsApp</Button>
          </a>
        </form>
      </div>
      
      <div className="map-container" style={{marginTop: '60px', width: '100%', height: '400px'}}>
        <iframe 
          src="https://maps.google.com/maps?q=Av.%20Alameda%20Libertador%20Bernardo%20O'Higgins%201316&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default Contacto;
