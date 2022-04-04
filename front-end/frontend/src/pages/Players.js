import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import Link from 'react-router-dom'
// import Players from '../components/AddPlayers'

const Players = () => {

    const BASE_URL = 'http://localhost:3001/api'

    const [players, setPlayers] = useState([])
    const [loading, setLoading] = useState(true)
    
  
    const getPlayers = async () => {
      setLoading(true)  
      let res = await axios.get(`${BASE_URL}/allPlayers`)
      console.log(res.data.players)
      setPlayers(res.data.players)
      setLoading(false)
    }
  

  
    useEffect(() => {
      getPlayers()
      
    }, [])
   
    

    return(
        <div>
            <h1>These are the starting 5 of each team</h1>
            <div className='PlayersPage'>
                
            {players.map((player) => (
            
                
                    <div key={player.id}>
                        <h1> {player.name}</h1>
                        <p>position: {player.position}</p>
                        <p>ppg: {player.ppg}</p>
                        <p>threePoint: {player.threePoint}</p>
                        <p>fieldGoal: {player.fieldGoal}</p>
                        <p>freeThrow: {player.freeThrow}</p>
                        <p>assists: {player.assists}</p>
                        <p>blocks: {player.blocks}</p>
                        <p>steals: {player.steals}</p>
                        <p>rebounds: {player.rebounds}</p>
                    </div>
                    )
                
                )}
                
           
        
            </div>  
        </div>             
           
                
     
    )
}

export default Players