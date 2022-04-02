import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

  return (
    <header>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/players' >Players</Link>
        <Link to='/teams' >Teams</Link>
      </nav>
    </header>
  )
}

export default Nav