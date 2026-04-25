import './Servicios.css';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

const serviciosData = [
  { 
    id: 1, 
    name: 'Entrenamiento Personalizado', 
    benefit: 'Alcanza tus metas más rápido con un plan 100% adaptado a tu cuerpo y objetivos.', 
    img: img2 
  },
  { 
    id: 2, 
    name: 'Clases Grupales', 
    benefit: 'Suda, diviértete y quema calorías en comunidad. Desde funcional hasta spinning.', 
    img: img3 
  },
  { 
    id: 3, 
    name: 'Asesoría Nutricional', 
    benefit: 'Potencia tus resultados entrenando y comiendo de forma inteligente.', 
    img: img4 
  }
];

const Servicios = () => {
  return (
    <div className="section classes-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h2 className="section-title">Nuestros <span className="text-accent">Servicios</span></h2>
        <p className="section-subtitle">No solo entrenas, transformas tu estilo de vida.</p>
        
        <div className="classes-grid">
          {serviciosData.map(srv => (
            <div key={srv.id} className="class-card">
              <img src={srv.img} alt={srv.name} className="class-img" />
              <div className="class-info">
                <h3>{srv.name}</h3>
                <p>{srv.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
