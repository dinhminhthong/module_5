import React from "react";
import {Routes,Route} from 'react-router-dom'
import PostList from "./component/ListPosts";
import PostCreate from "./component/PostCreate";
import PostEdit from "./component/PostEdit";
import {NavLink} from "react-router-dom";
function App() {
  return (
    <div>
        <NavLink to='/create' className=' btn btn-primary'>Create</NavLink>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/create' element={<PostCreate/>}/>
        <Route path='/edit' element={<PostEdit/>}/>
      </Routes>
    </div>
  );
}

export default App;
