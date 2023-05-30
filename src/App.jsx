import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'


function App() {

  return (
    <>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
