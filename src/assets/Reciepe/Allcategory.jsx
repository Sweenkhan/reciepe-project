import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { createContextReciepe } from '../../App';
import {useNavigate } from 'react-router-dom';
import "./Allcategory.css"
import urlLink from '../url/url';

function Allcategory() {

  const {allCategoryData, setAllCategoryData, selectedCatagoryData, setSelectedCatagoryData} = useContext(createContextReciepe) 

  const navigate = useNavigate()


  //-------------------------------------------FETCHING DATA FROM API BY CATEGORY--------------------------// 
  useEffect(() => { 
    axios.get(`${urlLink}/getAllCategory`)
      .then((result) => {  
       setAllCategoryData(result.data.allCategory)
      })

  }, []);



  function handleFecthData(e, name){
    e.preventDefault();

    console.log(name)
    axios.get(`${urlLink}/getSelectedCategory/${name}`)
      .then((result) => { 
       console.log(result.data.status) 
       setSelectedCatagoryData(result.data.selectedCatagoryData)
       navigate("/choosenCategory")
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
