import React, { useState, useEffect } from 'react'
import axios from 'axios'



function Reciepe() {
 

  // const [categories, setCategories] = useState([])
  const [reciepes, setReciepes] = useState([])
 


  //-------------------------------------------FETCHING DATA FROM API BY CATEGORY--------------------------// 
  useEffect(() => {

    axios.get("http://localhost:8000/getAllCategory")
      .then((result) => { 
       console.log(result.data.message)
      })

  }, []);


 
  return (
    <div className="reciepeCnt">
      <h2>This is the reciepe page.</h2> 
      {/* {
        categories.map((categ, index) => {
          return <div key={index}>
            <img src={categ.strCategoryThumb} alt="main-img" />
            <h2>{categ.strCategory}</h2>
          </div>
        })
      } */}
    </div>

  )
}

export default Reciepe