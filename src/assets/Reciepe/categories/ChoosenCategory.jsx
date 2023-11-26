import React from 'react'
import { useContext } from 'react'
import { createContextReciepe } from '../../../App'
import RecipeData from './RecipeData'
import "./ChoosenCategory.css"



function ChoosenCategory() {

const {selectedCatagoryData} = useContext(createContextReciepe)

console.log(selectedCatagoryData)


  return (
    <div className='choosenCategory'>  

    <div className='choosenCategoryCnt'> 
     {
        selectedCatagoryData.map((data, index) => {
            return (
                <div key={index} className='choosenCat'>
                <h2>{data.reciepeName}</h2> 
                <img src={data.mealImage} alt="categoryImg" />
        
                </div>
            )
        })
     }
     </div> 
    </div>
  )
}

export default ChoosenCategory