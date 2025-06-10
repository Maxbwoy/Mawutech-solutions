import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ClientQuestionnaire from './ClientQuestionnaire'
import Navbar from './Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route path="/ClientQuestionnaire" element={<ClientQuestionnaire /> } />
      </Routes>
    </Router>
  )
}

export default App
