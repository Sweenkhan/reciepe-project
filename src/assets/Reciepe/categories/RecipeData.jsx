import React, { useContext, useEffect } from "react";
import Youtube from "./Youtube";
import { createContextReciepe } from "../../../App";
import "./RecipeData.css"
import { useNavigate } from "react-router-dom";

function RecipeData() {
  const { recipeData } = useContext(createContextReciepe);
  let navigate = useNavigate()

 
  console.log(recipeData)

  //-----------------------------removing youtube videoId from data------------||
  function filteringId(data) {
    let filterId = data.youtubeLink.split("=");
    let videoId =   filterId[1]; 
      return videoId;
    
  }

  let id = filteringId(recipeData) 

console.log(id)
  // useEffect(() => {
  //   let id = filteringId(recipeData)
  //   if(id == false){
  //     navigate("/")
  // }else{
  //    return id
  // }
  // },[])

  //---------------------------removing measurMents from reciepeData-------------||

  function filterMeasurMents(data) {
   
    let measurMents = data.measurMents;
    let filter = [];
    for (let i = 0; i < measurMents.length; i++) {
      if (measurMents[i] != " ") {
        filter.push(measurMents[i]);
      }
    }
    return filter;
    
  }

  let measurMents = filterMeasurMents(recipeData);
  // console.log(measurMents);


  

  return (
    <div className="recipeDataCnt">
    <div className="data">
    <div className="leftRight">
      <div className="left">
      <h2>{recipeData.reciepeName}</h2>
      <p>ID: {recipeData.mealId}</p>
      <p>Category: {recipeData.category}</p>
      </div>
      <div className="right">
      <div className="ingredients"> 
      {(recipeData.ingredients) && recipeData.ingredients.map((imgSrc, index) => {
           return (
            <div  key={index} className="ingredient">
            <p>{imgSrc}</p>
            <img src={`http://www.themealdb.com/images/ingredients/${imgSrc}.png`} alt={imgSrc} ></img>
            </div>
           ) 
      }) 
      }
      </div>
      </div>
    </div>
       

      {id && <Youtube id={id} />}
    </div>
    </div>
  );
}

export default RecipeData;
