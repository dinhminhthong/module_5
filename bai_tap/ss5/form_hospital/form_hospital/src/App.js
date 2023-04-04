
import './App.css';
import FormHospital from "./components/FormHospital";
import React from "react";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";


function App() {
  return (
      <>
        <NavLink to={'/create'} className={'ms-3'}>Create</NavLink>
        <Routes>
          <Route path={'/create'} element={<FormHospital />} />
        </Routes>
      </>
  );
}

export default App;