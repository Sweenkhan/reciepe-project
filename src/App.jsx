import React, { useState } from 'react' 
import './App.css'
import Reciepe from './assets/Reciepe/Reciepe.jsx'
import Header from './assets/Header/Header.jsx'
import Home from './assets/Home/Home.jsx'
import { BrowserRouter, Router, Route } from 'react-router-dom'

function App() { 

  return ( 
      <div className='app'>
    <BrowserRouter>
      <Header />
      <Router >
        <Route  path="/" element={<Home />}> </Route>  
        <Route  path="/reciepe" element={<Reciepe />}></Route> 
        {/* <Route  path="/category" element={<Category />}></Route>  */}
        {/* <Route  path="/sign-up" element={<Register />}></Route> 
        <Route  path="/login" element={<Login />}></Route>  */}
         
      </Router>
    </BrowserRouter> 
        </div> 
  )
}

export default App
