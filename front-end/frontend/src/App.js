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
  const BASE_URL = 'http://localhost:3001/api'

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])

  const getPlayers = async () => {
    const res = await axios.get(`${BASE_URL}/allPlayers`)
    // console.log(res.data.players)
    setPlayers(res.data.players)
  }

  const getTeams = async () => {
    const res = await axios.get(`${BASE_URL}/allTeams`)
    // console.log(res.data.teams)
    setTeams(res.data.teams)
    console.log(teams)

  }

  useEffect(() => {
    getPlayers()
    getTeams()
  }, [])
console.log(teams)
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/players' element={<Players players={players}/>}/>
          <Route path='/Teams' element={<Teams players={Teams}/>}/>
      </Routes>
     
     

      </div>
  )
  }


export default App;
