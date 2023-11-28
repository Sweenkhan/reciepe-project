import React, { useEffect } from 'react'
import { useContext } from 'react'
import { createContextReciepe } from '../../../App'
import RecipeData from './RecipeData'
import "./ChoosenCategory.css"
import { Link, useNavigate } from 'react-router-dom'



function ChoosenCategory() {

let navigate = useNavigate()
const {selectedCatagoryData, setRecipeData} = useContext(createContextReciepe) 
// console.log(selectedCatagoryData)


function handleRecipeData(e, data){
   e.preventDefault();
   setRecipeData(data)
   console.log(data)
   navigate("/recipeData")
}

 

useEffect(() => {
  if(selectedCatagoryData.length<1){
    navigate("/")
}
},[selectedCatagoryData])



  return (
    <div className='choosenCategory'>  

    <div className='choosenCategoryCnt'> 
     {
        selectedCatagoryData.map((data, index) => {
            return (
                <div key={index} className='choosenCat'>
                <h2>{data.reciepeName}</h2> 
                <div className='image' onClick={(e) => {handleRecipeData(e, data)}} ><img src={data.mealImage} alt="categoryImg" /></div> 
                <div className='visitCnt'>
                   <h3 onClick={(e) => {handleRecipeData(e, data)}}><Link >Visit for more info...</Link> </h3>
                </div>
                </div>
            )
        })
     }
     </div> 
    </div>
  )
}

export default ChoosenCategory