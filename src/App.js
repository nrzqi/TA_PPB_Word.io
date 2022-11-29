import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Random from './pages/Random'
import DetailRandom from './pages/DetailRandom'
import Slang from './pages/Slang'
import DetailSlang from './pages/DetailSlang'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/random" element={<Random />} />
        <Route path="/detail_random/:id_random" element={<DetailRandom />} />
        <Route path="/slang" element={<Slang />} />
        <Route path="/detail_slang/:id_slang" element={<DetailSlang />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <footer>
        <NavLink to="/Home" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/About" className="iconWrapper">
          <MdGroup className="icon" />
          About
        </NavLink>
    </footer>
  </BrowserRouter>
  );
}

export default App;




