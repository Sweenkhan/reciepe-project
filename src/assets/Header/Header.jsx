import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo from "../Images/loogo.png"
import SearchIcon from "@mui/icons-material/Search";

function Header() {

  const [showsearchInput, setShowsearchInput] = useState(false)

  // console.log(showsearchInput)


  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setShowsearchInput(false)
  }

  return (
    <div className="header">
      <h2 className="logo"><Link to={"/"}>QRECIEPE</Link></h2>
      <div className="headerRight"  >
      <div className="formDiv"> 
        <form onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >
          <input type="text" className={(showsearchInput) ? "showInput" : "closeInput" } placeholder="Search..."/>
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
