import React from "react";
import {Routes,Route} from "react-router-dom";
import BlogList from "./component/BlogList";
import BlogCreate from "./component/BlogCreate";
import {NavLink} from "react-router-dom";

function App() {
  return (
    <div>
        <NavLink to='/create'>Create</NavLink>
      <Routes>
        <Route path='/' element={<BlogList/>}/>
        <Route path='/create' element={<BlogCreate/>}/>
      </Routes>
         </div>
  );
}

export default App;
