import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";
import ProductEdit from "./component/ProductEdit";

function App() {
  return (
    <>
        <NavLink to='/create'>Create</NavLink>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/create' element={<ProductCreate/>}/>
        <Route path='/edit/:id' element={<ProductEdit/>}/>
      </Routes>
      </>
  );
}

export default App;
