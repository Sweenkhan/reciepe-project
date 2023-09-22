import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Reciepe() {

  // idMeal: '52770', strMeal: 'Spaghetti Bolognese', strDrinkAlternate: null, strCategory
  // mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink, strTags, mealImage
  const [categories, setCategories] = useState([])

 

  //-------------------------------------------FETCHING DATA FROM API BY CATEGORY--------------------------//

  useEffect(() => {

    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => { 
        setCategories(result.data.categories)
         console.log(result.data.categories[0].strCategoryThumb) 
      })

  }, []);

 
  return (
    <div className="reciepeCnt">
      <h2>This is the reciepe page.</h2> 
      {
        categories.map((categ, index) => {
          return <div key={index}>
            <img src={categ.strCategoryThumb} alt="main-img" />
            <h2>{categ.strCategory}</h2>
          </div>
        })
      }
    </div>

  )
}

export default Reciepe