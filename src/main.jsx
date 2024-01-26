import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Similarity from './components/Similarity.jsx'
import Keys from './components/Keys.jsx'
import Navbar from './components/Navbar.jsx'
import Works from './components/Works.jsx'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/similarity" element={<Similarity />} />
        <Route path="/keys" element={<Keys />} />
        <Route path="/work" element={<Works />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
