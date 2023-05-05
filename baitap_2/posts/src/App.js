import React from "react";
import {NavLink, Routes} from "react-router-dom"
import {Route} from "react-router-dom";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

function App() {
  return (
    <div>
        <NavLink to='/' className='btn btn-primary'>List</NavLink>
        <NavLink to='/create' className='ms-4 btn btn-primary'>Create</NavLink>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/create' element={<PostCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
