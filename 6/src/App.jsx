import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
  