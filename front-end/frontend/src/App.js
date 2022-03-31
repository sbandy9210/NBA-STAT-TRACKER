import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Players from './pages/Players'
import Teams from '../pages/Teams'
import axios from 'axios';






function App() {
  const BASE_URL = 'http://localhost:3000'

  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])

  const getPlayers = async () => {
    const res = await axios.get(`${BASE_URL}/players`)
    console.log(res.data)
    setPlayers(res.data)
  }

  const getTeams = async () => {
    const res = await axios.get(`${BASE_URL}/teams`)
    console.log(res.data)
    setTeams(res.data)
    console.log(teams)

  }

  useEffect(() => {
    getPlayers()
    getTeams()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      {teams.map((e) => (
        
        <div>

          <div> {e.name}</div>

          <button>DELETE</button>
          <button>UPDATE</button>

         </div>))}
      </div>
  )
  
}

export default App;
