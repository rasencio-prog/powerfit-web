import Button from '../components/Button';
import { ArrowRight, Activity, Users, Clock } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/img1.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">TRANSFORMA TU CUERPO EN <span className="text-accent">90 DÍAS</span></h1>
            <p className="hero-subtitle">
              Ya sea que busques bajar de peso, ganar masa muscular o mejorar tu salud. 
              Tenemos el entrenamiento perfecto para principiantes y atletas de alto rendimiento.
            </p>
            <Link to="/contacto">
              <Button>
                CONTÁCTANOS POR WHATSAPP <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          <div className="hero-image-wrapper">
             <img src={heroImg} alt="Atleta entrenando en PowerFit" className="hero-image"/>
             <div className="hero-image-bg"></div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Activity className="text-accent mb-4" size={48} />
              <h3>Equipamiento Premium</h3>
              <p>Múltiples zonas de entrenamiento y pesas libres con equipos de última tecnología.</p>
            </div>
            <div className="feature-card">
              <Users className="text-accent mb-4" size={48} />
              <h3>Entrenadores Expertos</h3>
              <p>Nuestro equipo de profesionales está aquí para guiarte en cada paso de tu viaje fitness.</p>
            </div>
            <div className="feature-card">
              <Clock className="text-accent mb-4" size={48} />
              <h3>Abierto 24/7</h3>
              <p>No importa tu horario, estamos siempre abiertos para que puedas entrenar a tu ritmo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
