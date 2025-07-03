import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OptivekWebsite from './landing.jsx';
import OptivekMacroLanding from './appmacro.jsx';
import OptivekPlanilhaLanding from './dinamiky.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OptivekWebsite />} />
      <Route path="/appmacro" element={<OptivekMacroLanding />} />
      <Route path="/dinamiky" element={<OptivekPlanilhaLanding />} />
    </Routes>
  );
}

export default App;