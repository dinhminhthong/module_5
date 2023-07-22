import {Route, Routes} from "react-router-dom"
import React from "react";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import ProductList from "./component/product/ProductList";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<ProductList/>}/>
            </Routes>
        </>
    );
}

export default App;
