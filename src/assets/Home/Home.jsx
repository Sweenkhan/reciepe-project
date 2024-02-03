import React, { useContext, useEffect, useState } from "react";
import Allcategory from "../Reciepe/Allcategory";
import "./Home.css";
import main from "../Images/mainImg.avif";
import secondMain from "../Images/secondMain.png";
import Typewriter from "./TypeWriter.jsx";
import axios from "axios";
import { createContextReciepe } from "../../App.jsx";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {
  

  const [mostPopular, setMostPopular] = useState([])
  const {setRecipeData} = useContext(createContextReciepe)

  let navigate = useNavigate()
  const backgroundImageStyle = {
    backgroundImage: `url(${main})`, // Use the url() function to set the background image
  };


// most pupolar reciepes fetching from mongodb
useEffect(() => {
   axios.get("http://localhost:8000/mostPopular")
   .then((result) => {
      console.log(result.data.mostPopularReciepes)
      setMostPopular(result.data.mostPopularReciepes)
   })
}, [])


function handleRecipeData(e, data){
  e.preventDefault();
  setRecipeData(data)
  console.log(data)
  navigate("/recipeData")
}



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
      <div className="thirdSection">
      <h2 style={{color: "white", textAlign: "center", margin: "0.8rem 0", fontSize: "2rem"}}>MOST POPULAR</h2>
        <div className="mostPopular">
          {(mostPopular.length !== 0) && 
               mostPopular.map((val, index) => {
                return (
                  <div key={index} className="popularReciepeDiv">
                  <div className="popularImg"> <img src={val.mealImage} alt={val.reciepeName} onClick={(e) => {handleRecipeData(e, val)}} /></div>
                    <h3>{val.reciepeName}</h3>
                    <p>{val.instruction.substring(0, 80)}<span className="readMore" onClick={(e) => {handleRecipeData(e, val)}}> Read more...</span> </p>
                  </div>
                )
               })
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
