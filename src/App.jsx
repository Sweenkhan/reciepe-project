import React, { createContext, useState } from "react";
import "./App.css";
import Reciepe from "./assets/Reciepe/Reciepe.jsx";
import Header from "./assets/Header/Header.jsx";
import Home from "./assets/Home/Home.jsx";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import CategoryRecipe from "./assets/Reciepe/categoryReciepe/CategoryRecipe";
import Allcategory from "./assets/Reciepe/Allcategory";

export const createContextReciepe = createContext({});

function App() {
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [selectedCatagory, setSelectedCatagory] = useState([]);

  return (
    <createContextReciepe.Provider
      value={{
        allCategoryData,
        setAllCategoryData,
        selectedCatagory,
        setSelectedCatagory,
      }}
    >
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reciepe" element={<Reciepe />}>
              <Route index path="allcategory" element={<Allcategory />} />
              <Route path="categoryReciepe" element={<CategoryRecipe />} />
            </Route>

            {/* <Route  path="/category" element={<Category />}></Route>  */}
            {/* <Route  path="/sign-up" element={<Register />}></Route>  */}
            {/* <Route  path="/login" element={<Login />}></Route>   */}
          </Routes>
        </BrowserRouter>
      </div>
    </createContextReciepe.Provider>
  );
}

export default App;
