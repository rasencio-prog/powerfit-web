import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Horarios from './pages/Horarios';
import Planes from './pages/Planes';
import Nosotros from './pages/Nosotros';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Pago from './pages/Pago';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/pago" element={<Pago />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
