import React from "react";
import {Routes,Route} from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";
import ProductEdit from "./component/ProductEdit";


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/create' element={<ProductCreate/>}/>
        <Route path='/edit/:id' element={<ProductEdit/>}/>
      </Routes>
      </>
  );
}

export default App;
