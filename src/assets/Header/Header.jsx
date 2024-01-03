import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
// import logo from "../Images/loogo.png"
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { createContextReciepe } from "../../App";
import { useNavigate } from "react-router-dom";


function Header() {

  const {setSelectedCatagoryData} = useContext(createContextReciepe);

  const [showsearchInput, setShowsearchInput] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()
  // console.log(showsearchInput)


  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setInputValue("")
    setShowsearchInput(false)
  }


  function handleChange(e){
         console.log(e.target.value)
         setInputValue(e.target.value)
  }



  //------------------------------HANDLE RECIEPE DATA SEARCH---------------------------//

  useEffect(()=>{

   inputValue !== "" && axios.get(`http://localhost:8000/searchBar/${inputValue}`)
    .then((result) => {
        
         if(result.data.status === 200){
          setSelectedCatagoryData(result.data.data)
          navigate("/choosenCategory")
         } else {
           navigate("/")
         }
        
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
