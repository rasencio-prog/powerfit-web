import Button from '../components/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Planes.css';

const Planes = () => {
  return (
    <div className="section plans-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Elige tu <span className="text-accent">Plan</span></h2>
        <p className="section-subtitle">Sin contratos ocultos. Paga solo por lo que necesitas.</p>
        
        <div className="plans-grid">
          <div className="plan-card">
            <h3>Mensual</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">49</span>
              <span className="period">/mes</span>
            </div>
            <ul className="plan-features">
              <li><Check size={16} className="text-accent" /> Acceso ilimitado 24/7</li>
              <li><Check size={16} className="text-accent" /> Uso de todas las áreas</li>
              <li><Check size={16} className="text-accent" /> Evaluaciones básicas</li>
              <li className="disabled">-</li>
            </ul>
            <Link to="/pago">
              <Button variant="outline" className="full-width mt-4">Empezar Ahora</Button>
            </Link>
          </div>

          <div className="plan-card popular">
            <div className="popular-badge">Mejor Valor</div>
            <h3>Trimestral / Anual</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">39</span>
              <span className="period">/mes</span>
            </div>
            <p className="billed-yearly">Ahorra hasta un 20% pagando por adelantado.</p>
            <ul className="plan-features">
              <li><Check size={16} className="text-accent" /> Acceso ilimitado 24/7</li>
              <li><Check size={16} className="text-accent" /> Clases grupales incluidas</li>
              <li><Check size={16} className="text-accent" /> Asesoría mensual</li>
              <li><Check size={16} className="text-accent" /> Descuento en suplementos</li>
            </ul>
            <Link to="/pago">
              <Button variant="primary" className="full-width mt-4">Ver Descuentos</Button>
            </Link>
          </div>

          <div className="plan-card">
            <h3>Promos Especiales</h3>
            <div className="plan-price">
              <span className="currency">Estudiantes &</span>
              <br/>
              <span className="amount" style={{fontSize: '2rem'}}>Parejas</span>
            </div>
            <ul className="plan-features" style={{marginTop: '24px'}}>
              <li><Check size={16} className="text-accent" /> 15% OFF con credencial</li>
              <li><Check size={16} className="text-accent" /> 2x1 en matrícula (Parejas)</li>
              <li><Check size={16} className="text-accent" /> Planes corporativos</li>
              <li><Check size={16} className="text-accent" /> Consulta por WhatsApp</li>
            </ul>
            <Link to="/pago">
              <Button variant="outline" className="full-width mt-4">Consultar Promo</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planes;
