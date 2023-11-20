import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { createContextReciepe } from '../../App';
import {useNavigate } from 'react-router-dom';
import "./Allcategory.css"

function Allcategory() {

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

    <div className='allcategory'>  
      { (allCategoryData.length > 0) &&
        allCategoryData.map((categ, index) => {
          return <div key={index} className='reciepeCnt'>
            <h2>{categ.categoryName}</h2>
            <img onClick={e => {handleFecthData(e, categ.categoryName)}} src={categ.categoryImg} alt="main-img" />
          </div>
        })
      } 
    </div>

  )
}

export default Allcategory
