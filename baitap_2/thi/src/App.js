import React from "react";
import {Routes, Route,NavLink} from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";
import ProductEdit from "./component/ProductEdit";


function App() {
  return (
  <>
    <NavLink to='/create' className='btn btn-primary col m-3'>CREATE</NavLink>
    <NavLink to='/' className='btn btn-primary'>List</NavLink>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/create' element={<ProductCreate/>}/>
      <Route path='/update' element={<ProductEdit/>}/>
    </Routes>
    </>
  );
}

export default App;
