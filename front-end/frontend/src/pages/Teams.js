import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Teams from '../components/AddTeam'

const Teams = (props) => {
    let navigate = useNavigate()
    const showTeams = (Teams) => {
        navigate (`${Teams._id}`)
    }
   

console.log(props.Teams)

    return(
        <div>
            <h1>Top 8 teams in the eastern and western conferences</h1>
            <div className='TeamsPage'>
                <div className='container-grid'>
                    {props.Teams.map((Teams) =>
                    (
                        <Teams
                        name = {Teams.name}
                        location = {Teams.location}
                        wins = {Teams.wins}
                        losses = {Teams.losses}
                        winningPercentage = {Teams.winningPercentage}
                        rank = {Teams.rank}
                        /> 


                    ))}
                </div>    

            </div>
        </div>
    )
}
export default Teams