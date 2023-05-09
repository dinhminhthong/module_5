import {Routes,Route,NavLink} from "react-router-dom";
import React from "react";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";
function App() {
  return (
    <div>
        <NavLink to='/create' className="btn btn-primary">CREATE</NavLink>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/create' element={<ProductCreate/>}/>
      </Routes>

    </div>
  );
}

export default App;
