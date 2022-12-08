import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'> Home Page </Link></li>
          <li><Link to='/about-me'> About Me </Link></li>
          <li><Link to='/personal-projects'> Personal Projects </Link></li>
          <li><Link to='/experience'> Experience </Link></li>
          <li><Link to='/contact-me'> Contact Me </Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default NavBar