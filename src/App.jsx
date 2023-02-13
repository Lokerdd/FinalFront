import React from 'react';

import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import CustomModal from './components/CustomModal/CustomModal';

import './App.css';

function App() {
  return (
    <div className="app">
      <CustomModal />
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
