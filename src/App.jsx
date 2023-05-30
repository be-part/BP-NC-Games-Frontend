import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import ReviewsList from './Components/ReviewsList';
import SingleReview from './Components/SingleReview';



function App() {

  return (
    <>
      <Header />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
        </Routes>
    </>
  )
}

export default App
