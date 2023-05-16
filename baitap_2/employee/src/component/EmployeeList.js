import {useEffect, useState} from "react";
import * as employeeService from "../service/EmployeeService"

function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [levels, setLevels] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let result = await employeeService.findAll();
            setEmployees(result)
        }
        const getAllLevel = async () => {
            let result = await employeeService.findAllLevel();
            setLevels(result)
        }
        getAll();
        getAllLevel();
    }, [])
    const handleDelete = async (id)=>{
        await employeeService.remove(id);
        let rs = await employeeService.findAll()
        setEmployees(rs)
    }
    return (
        <>
            <h1 className='text-center'>List Employee</h1>
            <table className="table table-stripe">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CONTRACT</th>
                    <th>LEVEL</th>
                    <th><ACTION></ACTION></th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.contract}</td>
                            <td>
                                {
                                    levels.filter(ems=>ems.id == value.levelEmployee)[0]?.level
                                }
                            </td>
                            <td>
                                <a className='btn btn-danger' onClick={()=>handleDelete(value.id)}>DELETE</a>
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default EmployeeList;