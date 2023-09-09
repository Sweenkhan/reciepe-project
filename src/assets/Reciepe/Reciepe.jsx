import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Reciepe() {

  // idMeal: '52770', strMeal: 'Spaghetti Bolognese', strDrinkAlternate: null, strCategory
  // mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink, strTags, mealImage
  const [categories, setCategories] = useState([])


  const [mealId, setMealId] = useState("")
  const [area, setArea] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [measurMents, setMeasurMents] = useState([])
  const [instruction, setInstruction] = useState("")
  const [reciepeName, setReciepeName] = useState("")
  const [youtubeLink, setYoutubeLink] = useState("") 
  const [mealImage, setMealImage] = useState("")


  useEffect(() => {

    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => { 
        setCategories(result.data.categories)
      })

  }, []);


  useEffect(() => {
    // axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52720")
    axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52780")
      .then(async (result) => { 


        const allDetail = result.data.meals[0]
        console.log(allDetail)
        setMealId(allDetail.idMeal)
        setArea(allDetail.strArea)
        setCategory(allDetail.strCategory)
        setInstruction(allDetail.strInstructions)
        setReciepeName(allDetail.strMeal)
        setYoutubeLink(allDetail.strYoutube) 
        setMealImage(allDetail.strMealThumb)
        setMeasurMents("")
        setIngredients("")
        filtering(allDetail)
      })
  }, [])



  //filter data
  function filtering(alldata) {
    for (let data in alldata) {
     
     //adding data in ingredient array-------------------//
      if (data.slice(0, 13) === "strIngredient") {

        if (alldata[data] === "") { 
          console.log("")
        } else if (alldata[data] === null) {
          console.log("")
        } else {
          setIngredients((ingredients) => {
            return [...ingredients, alldata[data]]
          }
          )
        }

      }

      //addind data in measurements array--------------  //
      else if (data.slice(0, 10) === "strMeasure") {

        if (alldata[data] === "") {

          console.log("")
        } else if (alldata[data] === null) {
          console.log("")
        } else {
          setMeasurMents((measureMents) => {
            return [...measureMents, alldata[data]]
          }
          )
        } 
      } 


    }
  }




  function handleClick(e) {
    e.preventDefault()

    axios.post("http://localhost:8000/home", { mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink,  mealImage })
      .then((result) => {
        console.log(result.data.message)
        console.log("eveythin is going fine.")
      })
  }


  console.log(ingredients)
  console.log(measurMents)


  return (
    <div className="reciepeCnt">
      <h2>This is the reciepe page.</h2>
      <button onClick={handleClick}>Click ME</button>
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