import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import logo from "../Images/loogo.png"
import SearchIcon from "@mui/icons-material/Search";

function Header() {

  const [showsearchInput, setShowsearchInput] = useState(false)
  const [inputValue, setInputValue] = useState("")

  // console.log(showsearchInput)


  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setShowsearchInput(false)
  }


  function handleChange(e){
         console.log(e.target.value)
         setInputValue(e.target.value)
  }



  useEffect(()=>{

    axios.get(`http://localhost:8000/searchBar/${inputValue}`)
    .then((result) => {
         console.log(result.data.status)
    })

  },[inputValue])




  return (
    <div className="header">
      <h2 className="logo"><Link to={"/"}>QRECIEPE</Link></h2>
      <div className="headerRight"  >
      <div className="formDiv"> 
        <form onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >
          <input type="text" className={(showsearchInput) ? "showInput" : "closeInput" } placeholder="Search..."
           onChange={(e) => {handleChange(e)}} value={inputValue}/>
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
