import axios from 'axios'
import { useState, useEffect } from 'react'

const AddNewTeam = () => {

    const BASE_URL = 'http://localhost:3001/api'

    const [form, setForm] = useState({
    name: '',
    location: '',
    wins: '',
    losses: '',
    rank: ''
    })



    const handleForm = async (e) => {
        await setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
    } 

    const handleCreate = async (e) => {
       await axios.post(`${BASE_URL}/addTeams`, form)
       e.preventDefault()
    }

useEffect (() => {
    
}, [form])



return (

<div className='addNewTeam'>
    
    <h1>Add a new Team!</h1>
    <form action='/Teams'>
        <label for='name'>Name: </label><br/>
        <input type='text' id='teamName' name='name' value={form.name} onChange={(event)=> handleForm(event)}/>
        <label for='location'>Location: </label><br/>
        <input type='text' id='location' name='location' value={form.location} onChange={(event)=> handleForm(event)}/>
        <label for='wins'>Wins: </label><br/>
        <input type='text' id='wins' name='wins' value={form.wins} onChange={(event)=> handleForm(event)}/>
        <label for='losses'>Losses: </label><br/>
        <input type='text' id='losses' name='losses' value={form.losses} onChange={(event)=> handleForm(event)}/>
        <label for='rank'>Rank: </label><br/>
        <input type='text' id='rank' name='rank' value={form.rank} onChange={(event)=> handleForm(event)}/><br/>
        <button  onClick={() => handleCreate()}>Submit</button>
    </form>
        
   

</div>

)


}
export default AddNewTeam