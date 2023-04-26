import React from "react";
import {Routes,Route} from 'react-router-dom'
import TiviList from "./components/TiviList";
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TiviList/>}/>
      </Routes>
    </div>
  );
}

export default App;
