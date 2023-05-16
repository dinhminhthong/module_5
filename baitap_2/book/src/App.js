import React from "react";
import {Routes,Route,NavLink} from "react-router-dom";
import BookList from "./component/BookList";
import BookCreate from "./component/BookCreate";

function App() {
  return (
    <>
        <NavLink to="/create" className='btn btn-primary'>Create</NavLink>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/create' element={<BookCreate/>}/>
      </Routes>
      </>
  );
}

export default App;
