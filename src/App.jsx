import React, { useState } from 'react' 
import './App.css'
import Reciepe from './assets/Reciepe/Reciepe'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Header from './assets/Header/Header'


function App() { 

  return ( 
      <div className='app'>
    <BrowserRouter>
      <Header />
      <Router >
        <Route  path="/" element={<Home />}></Route> 
        <Route  path="/about" element={<About />}></Route> 
        <Route  path="/reciepe" element={<Reciepe />}></Route> 
        <Route  path="/category" element={<Category />}></Route> 

      </Router>
    </BrowserRouter>
      <Reciepe />
        </div> 
  )
}

export default App
