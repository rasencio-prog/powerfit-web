import Button from '../components/Button';
import { ShieldCheck, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pago.css';

const Pago = () => {
  return (
    <div className="section pago-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <div className="pago-container">
          <div className="pago-header">
            <ShieldCheck size={48} className="text-accent mb-4" />
            <h2 className="section-title">Pago <span className="text-accent">Seguro</span></h2>
            <p className="section-subtitle">Estás a un paso de comenzar tu transformación.</p>
          </div>

          <div className="pago-content">
            <div className="pago-info">
              <h3>Confirmación de Suscripción</h3>
              <p>Al hacer clic en el botón de abajo, serás redirigido a la pasarela de pago segura de <strong>Transbank / Webpay</strong> para completar tu transacción de manera confiable.</p>
              
              <ul className="pago-benefits">
                <li><ShieldCheck size={20} className="text-accent" /> Transacción 100% segura y encriptada</li>
                <li><CreditCard size={20} className="text-accent" /> Aceptamos tarjetas de crédito y débito</li>
                <li><ShieldCheck size={20} className="text-accent" /> Activación inmediata de tu plan</li>
              </ul>
            </div>

            <div className="pago-action">
              {/* REEMPLAZA EL HREF CON TU LINK REAL DE TRANSBANK/WEBPAY */}
              <a href="https://www.webpay.cl/" target="_blank" rel="noreferrer" className="pago-link">
                <Button variant="primary" className="full-width pago-btn">
                  Pagar con Transbank <CreditCard size={20} style={{ marginLeft: '8px' }} />
                </Button>
              </a>
              <p className="pago-footer-text">Serás redirigido a un entorno seguro.</p>
              
              <div style={{ marginTop: '24px' }}>
                <Link to="/planes" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" className="full-width">
                    Volver a Planes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pago;
