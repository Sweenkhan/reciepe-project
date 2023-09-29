import React from 'react'
import { useContext } from 'react'
import { createContextReciepe } from '../../App'


function CategoryRecipe() {

    const {allCategoryData, setAllCategoryData} = useContext(createContextReciepe)


    
  return (
    <div>

    </div>
  )
}

export default CategoryRecipe