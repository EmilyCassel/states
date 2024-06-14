import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Door from './pages/Door';

import Home from './pages/Home';

import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Door />} />
    <Route path="/Home" element={<Home />} />

    <Route path="/home" element={<ProtectedRoute element={<Home />} />} />

  </Routes>
);

export default App;

