import {Route, Routes} from "react-router-dom"
import React from "react";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import ProductList from "./component/product/ProductList";
import ProductDetail from "./component/product/ProductDetail";

function App() {
    return (
        <>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<ProductList/>}/>
                <Route path='/detail' element={<ProductDetail/>}/>
            </Routes>
        </>
    );
}

export default App;
