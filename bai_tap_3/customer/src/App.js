import {Routes,Route} from "react-router";
import CustomerList from "./componet/CustomerList";
import React from "react";
import CustomerCreate from "./componet/CustomerCreeate";
import CustomerEdit from "./componet/CustomerEdit";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<CustomerList/>}/>
       <Route path='/create' element={<CustomerCreate/>}/>
       <Route path='edit/:id' element={<CustomerEdit/>}/>
     </Routes>
     </>
  );
}

export default App;
