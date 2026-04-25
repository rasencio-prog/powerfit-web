import './Galeria.css';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import img10 from '../assets/images/img10.jpg';
import img11 from '../assets/images/img11.jpg';
import img12 from '../assets/images/img12.jpg';
import img13 from '../assets/images/img13.jpg';
import img14 from '../assets/images/img14.jpg';

const images = [img6, img7, img8, img9, img10, img11, img12, img13, img14];

const Galeria = () => {
  return (
    <div className="section galeria-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Nuestra <span className="text-accent">Comunidad</span></h2>
        <p className="section-subtitle">Resultados reales, ambiente increíble. Únete a nosotros.</p>

        <div className="galeria-grid">
          {images.map((src, index) => (
            <div key={index} className="galeria-item">
              <img src={src} alt={`Galería PowerFit ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
