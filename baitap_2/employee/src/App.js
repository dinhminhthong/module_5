import React from "react";
import {Routes,Route} from "react-router-dom";
import EmployeeList from "./component/EmployeeList";
import EmployeeCreate from "./component/EmployeeCreate";
import {NavLink} from "react-router-dom";

function App() {
  return (
    <div>
        <NavLink to="/create">Create</NavLink>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="/create" element={<EmployeeCreate/>}/>
      </Routes>

    </div>
  );
}
export default App;
