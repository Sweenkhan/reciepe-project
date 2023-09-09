import React from 'react'
import axios from 'axios'



function Reciepe() {

    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((result) => {
           console.log(result)
      })
  return (
    <div className="reciepeCnt">Reciepe</div>
  )
}

export default Reciepe