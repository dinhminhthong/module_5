import React from "react";
import {Route,Routes,NavLink} from 'react-router-dom'
import CinameList from "./components/CinemaList";


function App() {
  return (
    <div>
     <NavLink to='/'>List</NavLink>
     <Routes>
         <Route path='/' element={<CinameList/>}/>
     </Routes>
    </div>
  );
}

export default App;
