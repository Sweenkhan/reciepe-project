import React,{useContext } from 'react'
import Youtube from './Youtube' 
import { createContextReciepe } from '../../../App';

function RecipeData() {


  const  {recipeData} = useContext(createContextReciepe); 
   
  function filteringId(data){
    let filterId = data.youtubeLink.split("=")
   let videoId = filterId[1] 
    return videoId
  }
  
 let id =  filteringId(recipeData)
console.log(id)

  return (
    <div>RecipeData
   {(id) && <Youtube id={id}/> }  
    </div>
  )
}

export default RecipeData