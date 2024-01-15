import React, { useContext, useState } from "react";
import Youtube from "./Youtube";
import { createContextReciepe } from "../../../App"; 
import "./RecipeData.css"
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import jsPDF from 'jspdf';



function RecipeData() {
  const { recipeData, setSelectedCatagoryData } = useContext(createContextReciepe);  


  let navigate = useNavigate()
 
  const downloadPdf = () => {
    const pdf = new jsPDF();
    const fontSize = 12;
    const margin = 10;
    const pageWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
  
    // Set font size
    pdf.setFontSize(fontSize);
  
    // Split text to fit within the page width for measurements
    const measurementsText = "Measurements: " + measurMents;
    const splitMeasurements = pdf.splitTextToSize(measurementsText, pageWidth);
  
    // Add measurements to the PDF
    pdf.text(splitMeasurements, margin, 20);
  
    // Split text to fit within the page width for instructions
    const splitInstructions = pdf.splitTextToSize(instruction, pageWidth);
  
    // Add instructions to the PDF
    pdf.text(splitInstructions, margin, 40); // Adjust Y-coordinate based on the height of the measurements section
  
    pdf.save('recipe.pdf');
  };
  

  

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

//  let dlInstruction = instruction.split("")
// let data = instruction.map((ele, i) => { 
//     return i+1 +  " " + ele 
// })


//  console.log(data)
 

//--------------------------------------------------click and search----------------------------------------------
function handleFecthData(e, name){
  e.preventDefault();

  console.log(name)
  axios.get(`http://localhost:8000/getSelectedCategory/${name}`)
    .then((result) => { 
     console.log(result.data.status) 
     setSelectedCatagoryData(result.data.selectedCatagoryData)
     navigate("/choosenCategory")
    })

}



  return (
    <div className="recipeDataCnt">
    <div className="data">
    <div className="leftRight">
      <div className="left">
      <h1>{recipeData.reciepeName}</h1>
      
      <div className="IdBox">
        <p className="catBtn" onClick={(e) => {handleFecthData(e, recipeData.category)}} >{recipeData.category}</p>
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
    
    {/* PDF DOWNLOAD SECTION */}
    <div>
    <button onClick={()=>downloadPdf()}>Download PDF</button>
    </div>
    
      {id && <Youtube id={id} />}
    </div>
    </div>
  );
}

export default RecipeData;
