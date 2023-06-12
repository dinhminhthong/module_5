import {Routes,Route} from "react-router-dom";
import React from "react";
import StudentList from "./component/StudentList";
import StudentCreate from "./component/StudentCreate";
import StudentEdit from "./component/StudentEdit";

function App() {
  return (
   <>

     <Routes>
       <Route path='/' element={<StudentList/>}/>
       <Route path='/create' element={<StudentCreate/>}/>
       <Route path='/edit/:id' element={<StudentEdit/>}/>
     </Routes>
     </>
  );
}

export default App;
