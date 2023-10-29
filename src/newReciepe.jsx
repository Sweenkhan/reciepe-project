// //------------ COMPONENT FOR DATA SAVE IN MONGODB COLLECTION  --------------------//


// import React,{useState, useEffect} from 'react'
// import axios from 'axios'


// function newReciepe() {

   
//   const [mealId, setMealId] = useState("")
//   const [area, setArea] = useState("")
//   const [category, setCategory] = useState("")
//   const [ingredients, setIngredients] = useState([])
//   const [measurMents, setMeasurMents] = useState([])
//   const [instruction, setInstruction] = useState("")
//   const [reciepeName, setReciepeName] = useState("")
//   const [youtubeLink, setYoutubeLink] = useState("") 
//   const [mealImage, setMealImage] = useState("")

 
//   const [allImages, setAllImages] = useState([]) 

 

// //------------------------------------FETCHING DATA WITH ID----------------------------//
// useEffect(() => { 
//     axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52867")
//       .then(async (result) => { 
 
//         const allDetail = result.data.meals[0]
//         console.log(allDetail)

//         setMealId(allDetail.idMeal)
//         setArea(allDetail.strArea)
//         setCategory(allDetail.strCategory)
//         setInstruction(allDetail.strInstructions)
//         setReciepeName(allDetail.strMeal)
//         setYoutubeLink(allDetail.strYoutube || "don't have") 
//         setMealImage(allDetail.strMealThumb)
//         setMeasurMents("")
//         setIngredients("")
//         filtering(allDetail)
//       })
//   }, [])


//   //-----------------------------------------SETTING INGREDIENT AND MESUREMENT IN AN ARRAY----------------------------
//   function filtering(alldata) {
//     for (let data in alldata) {
     
//      //adding data in ingredient array
//       if (data.slice(0, 13) === "strIngredient") {

//         if (alldata[data] === "") { 
//           console.log("")
//         } else if (alldata[data] === null) {
//           console.log("")
//         } else {
//           setIngredients((ingredients) => {
//             return [...ingredients, alldata[data]]
//           }
//           )
//         }

//       }
      

//       //addind data in measurements array------------
//       else if (data.slice(0, 10) === "strMeasure") {

//         if (alldata[data] === "") {

//           console.log("")
//         } else if (alldata[data] === null) {
//           console.log("")
//         } else {
//           setMeasurMents((measureMents) => {
//             return [...measureMents, alldata[data]]
//           }
//           )
//         } 
//       } 

//     }
//   }



//   //----------------------------SENDING ALL RECIEPE DATA TO BACKEND------------------------// 
//   function handleClick(e) {
//     e.preventDefault()

//     axios.post("http://localhost:8000/reciepe", { mealId, area, category, ingredients, measurMents, instruction, reciepeName, youtubeLink,  mealImage })
//       .then((result) => {
//         console.log(result.data.message)
//         console.log("eveythin is going fine.")
//       })


//       //------SETING DATA FOR CATEGORY ---------
//       // categories.map((images ) => { 
//       //  setAllImages((allImages) => {
//       //       return   [...allImages, {name: images.strCategory, image: images.strCategoryThumb}]
//       //   }) 
//       // })  

//   }

//   //----------------------------SENDING CATEGORY DATA TO BACKEND------------------------//
//   function sendImages(){

//     axios.post("http://localhost:8000/images", {allImages})
//     .then((result) => {
//            console.log(result.data.message)
//     })
//   }



//   return (
//     <div className='newRiciepe'>
//     <h2>This page is for reciepe send to backend </h2> 
    
//     <button onClick={handleClick} desabled="true">Click ME</button>
//     <button onClick={sendImages} desabled="true" >sendImages</button>
    
//     </div>

//   )
// }

// export default newReciepe