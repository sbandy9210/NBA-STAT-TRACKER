import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <header>
      <nav>
        <Link to='/' >West</Link>
        <Link to='/' >East</Link>
        <Link to='/about' >Players</Link>
      </nav>
    </header>
  )
}

export default Nav