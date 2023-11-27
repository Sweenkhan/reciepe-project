import React, { useContext } from "react";
import Youtube from "./Youtube";
import { createContextReciepe } from "../../../App";
import "./RecipeData.css"

function RecipeData() {
  const { recipeData } = useContext(createContextReciepe);

  //-----------------------------removing youtube videoId from data------------||
  function filteringId(data) {
    let filterId = data.youtubeLink.split("=");
    let videoId = filterId[1];
    return videoId;
  }

  let id = filteringId(recipeData);

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
      <h2>{recipeData.reciepeName}</h2>
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

      {id && <Youtube id={id} />}
    </div>
    </div>
  );
}

export default RecipeData;
