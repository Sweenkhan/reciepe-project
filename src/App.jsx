import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import Reciepe from "./assets/Reciepe/Reciepe.jsx";
import Header from "./assets/Header/Header.jsx";
import Home from "./assets/Home/Home.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Allcategory from "./assets/Reciepe/Allcategory";
import ChoosenCategory from "./assets/Reciepe/categories/ChoosenCategory.jsx";
import RecipeData from "./assets/Reciepe/categories/RecipeData.jsx";
import Contact from "./assets/Contact/Contact.jsx";
import Footer from "./assets/Footer/Footer.jsx";

export const createContextReciepe = createContext({});

function App() {
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const [selectedCatagoryData, setSelectedCatagoryData] = useState([]);
  const [recipeData, setRecipeData] = useState({})

  return (
    <createContextReciepe.Provider
      value={{
        allCategoryData,
        setAllCategoryData,
        selectedCatagory,
        setSelectedCatagory,
        selectedCatagoryData,
         setSelectedCatagoryData,
         recipeData, setRecipeData
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
             <Route path="/recipeData" element={<RecipeData />}></Route> 
             <Route path="/contact-us" element={<Contact />} ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </createContextReciepe.Provider>
  );
}

export default App;
