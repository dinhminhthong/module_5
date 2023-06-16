import {Routes,Route} from "react-router-dom";
import React from "react";
import ProductList from "./component/productList";
// import ProductCreate from "./component/ProductCreate";

function App() {
  return (
  <>
<Routes>
  <Route path='/' element={<ProductList/>}/>
  {/*<Route path='/create' element={<ProductCreate/>}/>*/}
</Routes>
    </>
  );
}

export default App;
