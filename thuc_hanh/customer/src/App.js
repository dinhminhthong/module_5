import React from "react";
import {Route,Routes,NavLink} from 'react-router-dom'
import CustomerList from "./components/CustomerList";
function App() {
  return (
    <div>
     <Routes>
       <Route path='/'element={<CustomerList/>}/>
     </Routes>
    </div>
  );
}

export default App;
