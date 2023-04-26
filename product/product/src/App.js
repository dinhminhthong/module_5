import React from "react";
import {Route,Routes,NavLink} from 'react-router-dom'
import ProductList from "./components/ProductList";
import ProductCreate from "./components/ProductCreate";

function App() {
  return (
    <div>
    <NavLink to="/">List</NavLink>
        <NavLink to="/create">Thêm</NavLink>
        <Routes>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/create' element={<ProductCreate/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
