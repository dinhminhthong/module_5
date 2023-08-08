import {Route, Routes} from "react-router-dom"
import React from "react";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import ProductList from "./component/product/ProductList";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";
import Test from "./component/cart/Test";
import { CartProvider } from "./context/CartContext";
import Hearder from "./component/home/Hearder";
import Navbar from "./component/home/Navbar";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<ProductList/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/test' element={<Test/>}/>
            </Routes>
        </>
    );
}

export default App;
