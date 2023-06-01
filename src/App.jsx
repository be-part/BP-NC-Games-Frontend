import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import ReviewsList from './Components/ReviewsList';
import SingleReview from './Components/SingleReview';
import { userContext } from "./Contexts/userContext";
import User from './Components/User';
import SelectUser from './Components/SelectUser';


function App() {

  const [user, setUser] = useState('grumpy19')

  return (
    <>
      <userContext.Provider value={[user, setUser]}>
      <Header />
      <Nav />
      <User />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route path="/signin" element={<SelectUser />} />
        </Routes>
      </userContext.Provider>
    </>
  )
}

export default App
