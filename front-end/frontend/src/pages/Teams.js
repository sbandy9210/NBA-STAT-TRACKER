import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import Link from 'react-router-dom'
import AddTeam from '../components/Teams'

const Team = () => {

    const BASE_URL = 'http://localhost:3001/api'

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(true)
    
  
    const getTeams = async () => {
      setLoading(true)  
      let res = await axios.get(`${BASE_URL}/allTeams`)
      console.log(res.data.teams)
      setTeams(res.data.teams)
      setLoading(false)
    }
  
   
  
    useEffect(() => {
      getTeams()
      
    }, [])
   
    // let navigate = useNavigate()
    // const showTeams = (teams) => {
    //     navigate (`${teams._id}`)
    // }

    return(
        <div>
            <h1>These are the starting 5 of each team</h1>
            <div className='TeamsPage'>
                
            {teams.map((player) => (
            
                // <Link to ={`/teams/${player._id}`}>
                    <div key={teams.id}>
                        <h1>{player.name}</h1>
                        <p>team:{player.team}</p>
                        <p>name:{player.name}</p>
                        <p>position:{player.position}</p>
                        <p>ppg:{player.ppg}</p>
                        <p>threePoint:{player.threePoint}</p>
                        <p>fieldGoal:{player.fieldGoal}</p>
                        <p>freeThrow:{player.freeThrow}</p>
                        <p>assists:{player.assists}</p>
                        <p>blocks:{player.blocks}</p>
                        <p>steals:{player.steals}</p>
                        <p>rebounds:{player.rebounds}</p>
                    </div>
                    )
                // </Link>
                )}
                
           
        
            </div>  
        </div>             
           
                
     
    )
}

export default Team