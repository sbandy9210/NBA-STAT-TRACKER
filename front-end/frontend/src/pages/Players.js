import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import Players from '../components/AddPlayers'

const Players = (props) => {

    const BASE_URL = 'http://localhost:3001/api'

    const [players, setPlayers] = useState([])
    
  
    const getPlayers = async () => {
      const res = await axios.get(`${BASE_URL}/allPlayers`)
      console.log(res.data.players)
      setPlayers(res.data.players)
    }
  
   
  
    useEffect(() => {
      getPlayers()
      
    }, [])
    let navigate = useNavigate()
    const showPlayers = (players) => {
        navigate (`${players._id}`)
    }

    return(
        <div>
            <h1>These are the starting 5 of each team</h1>
            <div className='PlayersPage'>
                console.log(props.players)

                {/* <div className='container-grid'>
                    {props.Players.map((Players) =>
                    (
                        <addPlayers
                        name = {Players.name}
                        position = {Players.position}
                        ppg = {Players.ppg}
                        threePoint = {Players.threePoint}
                        fieldGoal = {Players.fieldGoal}
                        freeThrow = {Players.freeThrow}
                        assists = {Players.assists}
                        blocks = {Players.blocks}
                        steals = {Players.steals}
                        rebounds = {Players.rebounds}
                        />



                    ))}  */}
                 {/* </div>     */}

            </div>
        </div>
    )
}
export default Players