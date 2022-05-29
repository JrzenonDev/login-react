import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Subscriber } from './pages/Subscriber'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/subscriber'>Área do assinante</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriber" element={<Subscriber />} />
      </Routes>
    </div>
  );
}

export default App;
