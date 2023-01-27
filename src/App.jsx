import React from 'react';

import MainPage from './pages/MainPage';
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
