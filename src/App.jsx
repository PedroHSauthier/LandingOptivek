import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OptivekWebsite from './pages/LandingPage.jsx';
import OptivekMacroLanding from './pages/AppMacroPage.jsx';
import OptivekPlanilhaLanding from './pages/DinamikyPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OptivekWebsite />} />
      <Route path="/macrosuite" element={<OptivekMacroLanding />} />
      <Route path="/dinamiky" element={<OptivekPlanilhaLanding />} />
    </Routes>
  );
}

export default App;