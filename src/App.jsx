import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home /> } />
      </Routes>
    </Router>
  )
}

export default App
