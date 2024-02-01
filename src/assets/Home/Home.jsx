import React from "react";
import Allcategory from "../Reciepe/Allcategory";
import "./Home.css";
import main from "../Images/mainImg.avif";
import secondMain from "../Images/secondMain.png";
import Typewriter from "./TypeWriter.jsx";


function Home() {
  
  const backgroundImageStyle = {
    backgroundImage: `url(${main})`, // Use the url() function to set the background image
  };

  return (
    <div className="homeWrapper">
      <div className="home">
        <div className="homeImg" style={backgroundImageStyle}>
          {" "}
        </div>
        <Typewriter />
        <div className="mainPageList">
          <Allcategory />
        </div>
      </div>
      <div className="secondSection">
        <div
          style={{ backgroundImage: `url(${secondMain})` }}
          className="seocndSectionImg"
        ></div>
      </div>
    </div>
  );
}

export default Home;
