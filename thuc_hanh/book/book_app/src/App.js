
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import EditBook from "./components/BookEdit";


function App() {
  return (
    <div>
    <NavLink to='/'>List</NavLink>
    <NavLink to='/create'>Create</NavLink>
      <Routes>
        <Route path='/' element={<BookList/>}/>
        <Route path='/create' element={<BookCreate/>}/>
        <Route path='/edit/:id' element={<EditBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
