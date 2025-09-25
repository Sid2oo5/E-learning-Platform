import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignupFormDemo } from './components/SignupFormDemo'
import { NavbarDemo } from './components/NavbarDemo'
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarDemo />} />
        <Route path="/signup" element={<SignupFormDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
