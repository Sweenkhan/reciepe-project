import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo from "../Images/loogo.png"
import SearchIcon from "@mui/icons-material/Search";

function Header() {

  const [showsearchInput, setShowsearchInput] = useState(false)

  console.log(showsearchInput)


  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setShowsearchInput(false)
  }

  return (
    <div className="header">
      <h2>QRECIEPE</h2>
      <div className="headerRight"  onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >
      <div className="formDiv"> 
        <form>
          <input type="text" className={(showsearchInput) ? "showInput" : "closeInput" } />
          <span> <SearchIcon className="search"/></span>
        </form>
        </div>
        <ul className="headerUl">
          <li>
            <Link to="/reciepe">Reciepes</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign-up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
