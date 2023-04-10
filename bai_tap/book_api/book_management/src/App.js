import React from "react";
import{NavLink,Route,Routes} from'react-router-dom'
import BookList from "./components/BookList";
function App() {
  return (
  <div>
<NavLink to='/'>List</NavLink>
<Routes>
  <Route path='/'element={<BookList/>}/>
</Routes>
    </div>
  );
}

export default App;
