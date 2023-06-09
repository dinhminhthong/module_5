import {Routes,Route} from "react-router-dom";
import React from "react";
import PostsList from "./component/PostList";
import PostsCreate from "./component/PostCreate";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<PostsList/>}/>
      <Route path='/create' element={<PostsCreate/>}/>
    </Routes>
    </>
  );
}

export default App;
