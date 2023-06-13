import {Routes,Route} from "react-router-dom";
import PhoneList from "./component/PhoneList";
import React from "react";
import PhoneCreate from "./component/PhoneCreate";
import PhoneEdit from "./component/PhoneUpdate";

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<PhoneList/>}/>
          <Route path='/create' element={<PhoneCreate/>}/>
          <Route path='/edit/:id' element={<PhoneEdit/>}/>
        </Routes>
        </>

  );
}

export default App;
