import React from "react";
import {Routes,Route,NavLink} from "react-router-dom";
import TiviList from "./component/TiviList";
import TiviCreate from "./component/TiviCreate";

function App() {
  return (
   <>
       <NavLink to='/create' className='btn btn-primary'>CREATE</NavLink>
     <Routes>
       <Route path='/' element={<TiviList/>}/>
       <Route path='/create' element={<TiviCreate/>}/>
      </Routes>
     </>
  );
}

export default App;
