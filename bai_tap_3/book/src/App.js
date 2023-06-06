
import BookList from "./component/BookList";
import React from "react";
import {Routes,Route} from "react-router-dom";
import BookCreate from "./component/BookCreate";
import BookEdit from "./component/BookEdit";

function App() {
  return (
      <Routes>
          <Route path='/' element={<BookList/>}/>
          <Route path='/create' element={<BookCreate/>}/>
          <Route path='/edit/:id' element={<BookEdit/>}/>
      </Routes>
  );
}

export default App;
