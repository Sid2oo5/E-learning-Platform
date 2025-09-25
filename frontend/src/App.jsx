import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignupFormDemo } from './components/SignupFormDemo'
import { NavbarDemo } from './components/NavbarDemo'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarDemo />} />
        <Route path="/signup" element={<SignupFormDemo />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
