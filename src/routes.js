import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import { BrowserRouter, Route, Routes,  } from 'react-router-dom'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router