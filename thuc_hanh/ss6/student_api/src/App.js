import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='students' element={<StudentList/>} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
