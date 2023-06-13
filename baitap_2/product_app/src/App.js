import {Routes,Route,NavLink} from "react-router-dom";
import ProductList from "./compnent/ProductList";
import ProductCreate from "./compnent/ProductCreate";

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/create' element={<ProductCreate/>}/>
        </Routes>
        </>
  );
}

export default App;
