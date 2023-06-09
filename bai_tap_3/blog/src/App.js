import {Routes,Route} from "react-router-dom";
import BlogList from "./component/BlogList";
import React from "react";
import BlogCreate from "./component/BlogCreate";
import BlogEdit from "./component/BlogEdit";
import BlogDetail from "./component/BlogDetails";

function App() {
  return (
  <Routes>
    <Route path='/' element={<BlogList/>}/>
    <Route path='/create' element={<BlogCreate/>}/>
    <Route path='/edit/:id' element={<BlogEdit/>}/>
    <Route path='/detail/:id' element={<BlogDetail/>}/>
  </Routes>
  );
}

export default App;
