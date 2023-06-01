
import axios from 'axios'
import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showlist from "./pages/Showlist.js";
import Summary from "./pages/Summary.js"
import Navbar from './components/Navbar.js';

const App = () => {
 // const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Showlist/>}/>
        <Route path='/summary/:id' element={<Summary/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
