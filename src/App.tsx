import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Obras from './pages/Obras';
import Clientes from './pages/Clientes';
import Noticias from './pages/Noticias';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Layout>
    </Router>
  );
}
