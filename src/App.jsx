import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OptivekWebsite from './pages/LandingPage.jsx';
import OptivekMacroLanding from './pages/AppMacroPage.jsx';
import OptivekPlanilhaLanding from './pages/DinamikyPage.jsx';
import OptivekPacoteCompleto from './pages/LandingPackage1.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OptivekWebsite />} />
      <Route path="/macrosuite" element={<OptivekMacroLanding />} />
      <Route path="/dinamiky" element={<OptivekPlanilhaLanding />} />
      <Route path="/pacotepromo" element={<OptivekPacoteCompleto />} />
    </Routes>
  );
}

export default App;