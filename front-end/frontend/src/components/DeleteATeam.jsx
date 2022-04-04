import axios from 'axios'
import { useState, useEffect } from 'react'



const DeleteTeam = () => {
    const BASE_URL = 'http://localhost:3001/'

    const [team, setTeam] = useState([])

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`${BASE_URL}/Teams/${e.target.id}`);
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