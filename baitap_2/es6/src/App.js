import React from "react";
import {Routes,Route} from "react-router";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<BookList/>}/>
    </Routes>
    </div>
  );
}

export default App;
