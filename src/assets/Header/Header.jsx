import React from 'react'
import "./Header.css"
// import Link from "react-router-dom"



function Header() {
  return (
    <div className="header">
      <h2>Meal</h2>
      <ul className='headerUl'>
        {/* <li><Link to="/about">About</Link></li>
        <li><Link to="/category">Category</Link></li>
        <li><Link to="/reciepe">Reciepe</Link></li>
        <li><Link to="/Register">Sign-up</Link></li> */}
      </ul>
    </div>
  )
}

export default Header