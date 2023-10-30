import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Pages/Home';
// import Error from '../Components/Error';

import Navbar from '../Layout/Navbar';

export default function Router() {
  return (
    <BrowserRouter>

      <Navbar/>
    
      <Routes>

        <Route path='/' element={<Home/>}/>
        {/* <Route path='*' element={<Error/>}/> */}

      </Routes>

    </BrowserRouter>
  )
}
