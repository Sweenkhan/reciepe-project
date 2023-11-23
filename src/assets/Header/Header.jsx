import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo from "../Images/loogo.png"
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <h2>QRECIEPE</h2>
      <div className="headerRight">
        <form>
          <input type="text" className="searctInput" />
          <SearchIcon className="search"/>
        </form>
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
