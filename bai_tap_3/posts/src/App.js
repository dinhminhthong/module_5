
import {Routes,Route,NavLink} from "react-router-dom";
import PostList from "./component/PostList";
import React from "react";
import PostsCreate from "./component/PostCreate";
import PostsEdit from "./component/PostsEdit";

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<PostList/>}/>
          <Route path='/create' element={<PostsCreate/>}/>
          <Route path='/edit/:id' element={<PostsEdit/>}/>
         </Routes>
        </>

  );
}

export default App;
