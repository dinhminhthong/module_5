import React from "react";
import {Routes,Route} from 'react-router-dom'
import PostList from "./component/ListPosts";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList/>}/>
      </Routes>
    </div>
  );
}

export default App;
