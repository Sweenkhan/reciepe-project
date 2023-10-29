import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"



function Header() {
  return (
    <div className="header">
      <h2>KHANRECIEPE</h2>
      <ul className='headerUl'>
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/reciepe">Reciepes</Link></li>
        <li><Link to="/sign-up">Sign-up</Link></li>
      </ul>
    </div>
  )
}

export default Header