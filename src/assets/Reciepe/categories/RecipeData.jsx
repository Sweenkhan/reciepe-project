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


  //-----------------------setting instruction in an array---------------------||

  function filterInstruction(data){
    let instr = data.instruction.split(".");

    console.log(instr.length)
    let temp = []

    instr.forEach((el, i) => {
      if(/^\d/.test(el) || /^\d+\s?/.test(el)){
        temp.push(el.substring(1).trim())
        console.log(true)
    }else{
      temp.push(el.trim());
    }
    });
    console.log(temp)
    return temp
  }

 let instruction =  filterInstruction(recipeData)
//  console.log(instruction)



  return (
    <div className="recipeDataCnt">
    <div className="data">
    <div className="leftRight">
      <div className="left">
      <h1>{recipeData.reciepeName}</h1>
      
      <div className="IdBox">
        <p className="catBtn">{recipeData.category}</p>
        <p>{recipeData.mealId}</p>
      </div> 
      <div className="recipeImg">
        <img src={recipeData.mealImage} alt="rcpImg" />
      </div>
      </div>
      <div className="right">
      <h3>Ingredients</h3>
      <div className="ingredients"> 
      {(recipeData.ingredients) && recipeData.ingredients.map((imgSrc, index) => {
           return (
            <div  key={index} className="ingredient">
            {/* <p>{imgSrc}</p> */}
            <img src={`http://www.themealdb.com/images/ingredients/${imgSrc}.png`} alt={imgSrc} ></img>
            <p key={index}>{measurMents[index]} {imgSrc} </p>
            </div>
           ) 
      }) 
      }
      </div>
      </div>
    </div> 
    <div className="instructionCnt">
    <h2>Instruction</h2>
      { (recipeData.ingredients) &&  
        instruction.map((data, index) => {
          return (
           (index < instruction.length-1) && <p key={index}>{(index < instruction.length-1) ? index+1 : "" }. {data}.</p>
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
