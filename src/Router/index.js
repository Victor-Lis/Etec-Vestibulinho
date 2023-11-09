import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Pages/Home';
// import Error from '../Components/Error';

import Navbar from '../Layout/Navbar';
import Projetos from '../Pages/Projetos';
// import EnsinoTecnico from '../Pages/EnsinoTecnico';

export default function Router() {
  return (
    <BrowserRouter>

      <Navbar/>
    
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
        {/* <Route path='/ensino-tecnico' element={<EnsinoTecnico/>}/> */}
        {/* <Route path='*' element={<Error/>}/> */}

      </Routes>

    </BrowserRouter>
  )
}
