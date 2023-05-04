import {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
function StudentList() {
    const [student, setStudent] = useState([])
    const [class1 , setClass1] = useState([])

    useEffect( ()=>{
        const getAll = async () =>{
            let result = await studentService.findAll();
            setStudent (result)
            return student;
        }
        const getAllClass = async () =>{
            let result = await studentService.findAllClass();
            setClass1(result);
            return class1;
        }
        getAll();
        getAllClass();
    },[])
    return (
        <>
            <h1 className='text-center'>List Student</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SCORE</th>
                    <th>CLASSNAME</th>
                </tr>
                </thead>
                <tbody>
                {
                    student.map( (value,indenx) =>(
                        <tr key={indenx}>
                            <td>{indenx}</td>
                            <td>{value.name}</td>
                            <td>{value.score}</td>
                            <td>
                                {
                                    class1.filter(st => st.id === value.className)[0]?.name
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default StudentList;