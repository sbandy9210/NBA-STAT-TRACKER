import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Players from '../components/AddPlayers'

const Players = (props) => {
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