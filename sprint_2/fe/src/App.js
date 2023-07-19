import {Route,Routes} from "react-router-dom"
import React from "react";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
function App() {
  return (
   <>
     <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/>
     </Routes>
     </>
  );
}

export default App;
