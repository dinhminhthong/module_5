import {useEffect, useState} from "react";
import * as employeeService from "../EmployeeService/EmployeeService"

function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            const result = await employeeService.findAll();
            setEmployees(result)
            return employees
        }
        const getType = async () => {
            const result = await employeeService.findAllType();
            setTypes(result)
            return types
        }
        getAll();
        getType();
    }, [])
    return (
        <>
            <h1>List employee</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                    <th>EMPLOYEE TYPE</th>
                </tr>
                </thead>
                <tbody>
                { employees.map( (ems,index) =>(
                    <tr key={index}>
                        <td>{index}</td>
                        <td> {ems.name}</td>
                        <td>{ems.email}</td>
                        <td>{ems.address}</td>
                        <td>
                            {
                                types?.filter(em =>em.id===ems.employeeTypeId)[0]?.type
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

export default EmployeeList;