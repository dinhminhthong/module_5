import React from "react";
import {Routes,Route} from "react-router-dom";
import MusicList from "./component/MusicList";
import {NavLink} from "react-router-dom";
import MusicCreata from "./component/MusicCreate";

function App() {
  return (
      <>
          <NavLink to="create" className="btn btn-primary">Create</NavLink>
        <Routes>
          <Route path='/' element={<MusicList/>}/>
          <Route path='create' element={<MusicCreata/>}/>
        </Routes>
        </>

  );
}

export default App;
