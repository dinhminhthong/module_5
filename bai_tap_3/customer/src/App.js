import {Routes,Route} from "react-router";
import CustomerList from "./componet/CustomerList";

function App() {
  return (
   <>
     <Routes>
       <Route path='/' element={<CustomerList/>}/>
     </Routes>
     </>
  );
}

export default App;
