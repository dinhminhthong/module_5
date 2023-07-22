import {Route, Routes} from "react-router-dom"
import React from "react";
import Home from "./component/Home";



function App() {
    return (
        <>
            <Routes>
             {/*<Route path="/login" element={<Login/>}/>*/}
            <Route path='/' element={<Home/>}/>

            </Routes>
        </>
    );
}

export default App;
