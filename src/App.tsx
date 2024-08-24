import React from 'react';
import './App.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PiRatio from './pages/PiRatio';
import CustomCommandBar from './elements/CustomCommandBar';

// Initialize icons in the app
initializeIcons();


function App() {

  return (
    <BrowserRouter>
      <CustomCommandBar />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/pi-ratio" element={<PiRatio/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;