import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import EmployeeList from "./component/EmployeeList";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<EmployeeList/>}/>
     </Routes>
     </>
  );
}

export default App;
