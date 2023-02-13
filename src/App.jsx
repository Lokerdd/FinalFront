import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="user/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
