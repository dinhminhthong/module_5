import React from "react";
import {Routes,Route} from "react-router";
import ListStudent from "./components/ListStudent";
import BlogCreate from "../../blog/src/component/BlogCreate";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListStudent/>}/>
        <Route path='/create' element={<BlogCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
