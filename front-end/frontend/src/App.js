import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Players from './pages/Players'
import Home from './pages/Home'
import Teams from './pages/Teams'
import axios from 'axios';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      {/* <Teams/> */}

      <main>
      <Routes>
          <Route path="/" element={<Home />} />
            <Route path='/players' element={<Players />}/>
          {/* <Route path='/teams' element={<Teams />}/>   */}
      </Routes> 
      </main> 
    
     

      </div>
  )
  }


export default App;
