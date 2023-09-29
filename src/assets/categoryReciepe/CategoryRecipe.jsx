import React from 'react'
import { useContext } from 'react'
import { createContextReciepe } from '../../App'


function CategoryRecipe() {

    const {allCategoryData} = useContext(createContextReciepe)

    console.log(allCategoryData)

  return (
    <div>
         <h2>This is category data page.</h2>
    </div>
  )
}

export default CategoryRecipe