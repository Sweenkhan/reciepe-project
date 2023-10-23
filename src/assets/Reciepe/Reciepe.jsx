import React from 'react' 
import Allcategory from './Allcategory'
import { Outlet } from 'react-router-dom'
import CategoryRecipe from './categoryReciepe/CategoryRecipe'


function Reciepe() {
  
  return (
     <>
      <CategoryRecipe />
      <Outlet />
     </>

  )
}

export default Reciepe
