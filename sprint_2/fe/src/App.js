import {Route, Routes} from "react-router-dom"
import React from "react";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import ProductList from "./component/product/ProductList";
import ProductDetail from "./component/product/ProductDetail";
import Cart from "./component/cart/Cart";


import Navbar from "./component/home/Navbar";
import {QuantityProvider} from "./component/home/QuantityContext";
import Footer from "./component/home/Footer";
import Topbar from "./component/home/Topbar";
import {History} from "./component/cart/History";
import ScrollToTop from "./component/home/ScrollToTop";

function App() {
    return (
        <QuantityProvider>
            <Navbar/>
            <ScrollToTop/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Topbar/>

            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<ProductList/>}/>
                <Route path='/detail/:id' element={<ProductDetail/>}/>
                <Route path='/cart/:username' element={<Cart/>}/>
                <Route path='/history' element={<History/>}/>
            </Routes>
            <Footer/>
        </QuantityProvider>
    );
}

export default App;
