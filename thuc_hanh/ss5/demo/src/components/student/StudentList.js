import {useEffect, useState} from 'react';
import {students as data} from "../data/students";

function StudentList() {
    const [students, setStudents]= useState([])

    useEffect( () =>{
        setStudents(data)
    })
    return(
        <>
            <h1>Student List</h1>
            <table  className='table'>
                <thead>
                <tr>
                    <th scope='col'>Index</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Gender</th>
                    <th scope='col'>Language</th>
                    <th scope='col'>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    students.map((value, index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.gender==1? 'male' : value.gender==0?'female': 'lgbt'}</td>
                            <td>{
                                value.lagnuages.map(value =>(
                                    <span key={value}>{value} &nbsp;</span>

                                ) )
                             }</td>
                            <td>
                                <button type='button' className='btn btn-danger'>
                                    delete
                                </button>

                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    );
}
export default StudentList;