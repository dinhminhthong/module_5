import React from "react";
import {Routes,Route} from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import EmployeeCreate from "./component/EmployeeCreate";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<EmployeeList/>}/>
       <Route path='/create' element={<EmployeeCreate/>}/>
     </Routes>
     </>
  );
}

export default App;
