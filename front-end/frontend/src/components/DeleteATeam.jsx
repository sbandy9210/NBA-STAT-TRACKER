import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'




const DeleteTeam = (props) => {
    const BASE_URL = 'http://localhost:3001/api'

    const [team, setTeam] = useState([])

    const handleDelete = async () => {
        console.log(props.deleteTeam)
        // e.preventDefault();
        await axios.delete(`${BASE_URL}/Teams/${props.deleteTeam}`);
        window.location.reload();
      };

      useEffect (()=> {

      },[])





return(
    <div>
        <button  onClick={()=> handleDelete(team._id)}>Delete this team!</button>
    </div>
)


}
export default DeleteTeam