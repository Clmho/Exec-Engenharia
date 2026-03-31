/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Empresa } from './pages/Empresa';
import { Obras } from './pages/Obras';
import { ObraDetalhe } from './pages/ObraDetalhe';
import { Clientes } from './pages/Clientes';
import { Noticias } from './pages/Noticias';
import { NoticiaDetalhe } from './pages/NoticiaDetalhe';
import { Contato } from './pages/Contato';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/obras" element={<Obras />} />
        <Route path="/obras/:id" element={<ObraDetalhe />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<NoticiaDetalhe />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

