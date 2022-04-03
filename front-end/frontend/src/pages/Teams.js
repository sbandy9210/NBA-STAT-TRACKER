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

// create
//delete
//update
//add
   
  
   
  
    useEffect(() => {
      getTeams()
      
    }, [])
   
    // let navigate = useNavigate()
    // const showTeams = (teams) => {
    //     navigate (`${teams._id}`)
    // }

    return(
        <div>
            <h1>These are the top 8 teams of each conference</h1>
            <div className='TeamsPage'>
                
            {teams.map((team) => (
            
                // <Link to ={`/teams/${team\._id}`}>
                    <div key={teams.id}>
                        <h1>{team.name}</h1>
                        <p>location: {team.location}</p>
                        <p>wins: {team.wins}</p>
                        <p>losses: {team.losses}</p>
                        <p>winningPercentage: {team.winningPercentage}</p>
                        <p>rank: {team.rank}</p>
                        
                    </div>
                    )
                // </Link>
                )}
                
           
        
            </div>  
        </div>             
           
                
     
    )
}

export default Team