import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import EmployeeCreate from "./component/EmployeeCreate";
import EmployeeEidt from "./component/EmployeeEidt";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<EmployeeList/>}/>
       <Route path='/create' element={<EmployeeCreate/>}/>
       <Route path='/edit/:id' element={<EmployeeEidt/>}/>
     </Routes>
     </>
  );
}

export default App;
