import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'



function UpdateTeam({updateTeam}) {
    
    const navigate = useNavigate()

    const BASE_URL = 'http://localhost:3001/api'

    // const navigate = useNavigate()
    const [update, setUpdate] = useState(false)
    const [wins, setWins] = useState('')
    const [losses, setLosses] = useState('')


    const UpdateTeam = async (e) => {
        e.preventDefault()
        await axios.put(`${BASE_URL}/updateTeams/${updateTeam}`, {
            wins: wins, 
            losses: losses
        })
        window.location.reload(true)
    }
   
    
       
       
    




return (

<div className='UpdateTeam'>
    {update?

    <form onSubmit={(e) => UpdateTeam(e)}>
        {/* <input name='teams' type='text' placeholder='update your description here' onChange={(e) => setDescription(e.target.value)}></input> */}
        
        <input onChange={(e) => setWins(e.target.value)} type='text' id={'wins'} name={'wins'} placeholder={'wins'} />
        
        <input onChange={(e) => setLosses(e.target.value)} type='text' id={'losses'} name={'losses'} placeholder={'losses'} />
        
        <button className='update-button' onClick={() => navigate(`/teams`)}>submit</button>

      

  
    </form>:
    <button className='update-button' onClick={() => setUpdate(true)}>Update</button>

    
   
   
    }
</div>

)


}

export default UpdateTeam