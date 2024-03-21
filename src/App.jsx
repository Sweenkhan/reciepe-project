import React, { createContext, useState, lazy, Suspense } from "react";
import "./App.css";
import Header from "./assets/Header/Header.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Footer from "./assets/Footer/Footer.jsx";
// import Home from "./assets/Home/Home.jsx";
// import Reciepe from "./assets/Reciepe/Reciepe.jsx";
// import Allcategory from "./assets/Reciepe/Allcategory";
// import Contact from "./assets/Contact/Contact.jsx";
// import ChoosenCategory from "./assets/Reciepe/categories/ChoosenCategory.jsx";
// import RecipeData from "./assets/Reciepe/categories/RecipeData.jsx";
const Home = lazy(() => import("./assets/Home/Home.jsx"))
const Reciepe = lazy(() => import("./assets/Reciepe/Reciepe.jsx"))
const Allcategory = lazy(() => import("./assets/Reciepe/Allcategory"))
const Contact = lazy(() => import("./assets/Contact/Contact.jsx"))
const ChoosenCategory = lazy(() => import("./assets/Reciepe/categories/ChoosenCategory.jsx"))
const RecipeData = lazy(() => import("./assets/Reciepe/categories/RecipeData.jsx"))

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
          <Suspense fallback={<div>Loading...</div>}>
          <Routes> 
            <Route path="/" element={<Home />} /> 
            <Route path="/reciepe" element={<Reciepe />}> </Route>
             <Route  path="/allcategory" element={<Allcategory />} ></Route> 
             <Route path="/choosenCategory" element={<ChoosenCategory />}></Route>
             <Route path="/recipeData" element={<RecipeData />}></Route> 
             <Route path="/contact-us" element={<Contact />} ></Route>
          </Routes>
             </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    </createContextReciepe.Provider>
  );
}

export default App;
