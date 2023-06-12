import {Routes,Route} from "react-router-dom";
import MusicList from "./component/MusicList";
import React from "react";
import MusicCreate from "./component/MusicCreate";
import MusicEdit from "./component/MusicEdit";

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<MusicList/>}/>
    <Route path='/create' element={<MusicCreate/>}/>
    <Route path='edit/:id' element={<MusicEdit/>}/>
  </Routes>
    </>
  );
}

export default App;
