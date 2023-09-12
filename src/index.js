// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Practice1 from './practise1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/practice1" element={<Practice1 />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
