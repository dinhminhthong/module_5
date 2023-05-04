import React from "react";
import {Routes,Route} from "react-router";
import ListStudent from "./components/ListStudent";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ListStudent/>}/>
      </Routes>

    </div>
  );
}

export default App;
