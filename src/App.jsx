import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Reciepe from "./assets/Reciepe/Reciepe.jsx";
import Header from "./assets/Header/Header.jsx";
import Home from "./assets/Home/Home.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Allcategory from "./assets/Reciepe/Allcategory";
import ChoosenCategory from "./assets/Reciepe/categories/ChoosenCategory.jsx";

export const createContextReciepe = createContext({});

function App() {
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const [selectedCatagoryData, setSelectedCatagoryData] = useState([]);



  return (
    <createContextReciepe.Provider
      value={{
        allCategoryData,
        setAllCategoryData,
        selectedCatagory,
        setSelectedCatagory,
        selectedCatagoryData,
         setSelectedCatagoryData
      }}
    >
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/reciepe" element={<Reciepe />}> </Route>
             <Route  path="/allcategory" element={<Allcategory />} ></Route> 
             <Route path="/choosenCategory" element={<ChoosenCategory />}></Route> 
          </Routes>
        </BrowserRouter>
      </div>
    </createContextReciepe.Provider>
  );
}

export default App;
