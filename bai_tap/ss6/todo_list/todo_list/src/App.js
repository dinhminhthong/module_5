import {Link,NavLink,Route,Routes} from 'react-router-dom';
import TodoList from "./components/TodoList";


function App() {
  return (
    <>
  <NavLink to='/'>List</NavLink>
      <NavLink to='/create' className='ms-3'>Create</NavLink>
      <Routes>
        <Route path='/' element={<TodoList/>}/>
      </Routes>
    </>
  );
}

export default App;
