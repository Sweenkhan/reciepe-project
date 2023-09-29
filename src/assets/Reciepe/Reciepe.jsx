import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { createContextReciepe } from '../../App';
import { Outlet, useNavigate } from 'react-router-dom';

function Reciepe() {
 
 
  const {allCategoryData, setAllCategoryData} = useContext(createContextReciepe) 

  let navigate = useNavigate()
  //-------------------------------------------FETCHING DATA FROM API BY CATEGORY--------------------------// 
  useEffect(() => {

    axios.get("http://localhost:8000/getAllCategory")
      .then((result) => { 
       console.log(result.data.allCategory)
       setAllCategoryData(result.data.allCategory)
      })

  }, []);



  function handleFecthData(e, name){
    e.preventDefault();

    console.log(name)
    axios.get(`http://localhost:8000/getSelectedCategory/${name}`)
      .then((result) => { 
       console.log(result.data.status) 
       setAllCategoryData(result.data.selectedCatagoryData)
       navigate("categoryReciepe")
      })

  }

 
  return (
    <div className="reciepeCnt">
      <h2>This is the reciepe page.</h2> 
      { (allCategoryData.length > 0) &&
        allCategoryData.map((categ, index) => {
          return <div key={index}>
            <h2>{categ.categoryName}</h2>
            <img onClick={e => {handleFecthData(e, categ.categoryName)}} src={categ.categoryImg} alt="main-img" />
          </div>
        })
      }
      <Outlet />
    </div>

  )
}

export default Reciepe