import {useEffect, useState} from "react";
import * as employeeService from "../service/EmployeeService";

function EmployeeList() {
    const [employee, setEmployee] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let rs = await employeeService.findAll();
            setEmployee(rs)
        }
        const getAllType = async () => {
            let rs = await employeeService.findAllType();
            setTypes(rs)
        }
        getAll();
        getAllType();
    }, [])
    return (
        <>
            <h1 className="text-center">List Employee</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>LEVEL</th>
                    <th>TYPE EMPLOYEE</th>
                </tr>
                </thead>
                <tbody>
                {
                    employee.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.level}</td>
                            <td>
                                {
                                    types.filter(ems => ems.id == value.typeEmployee)[0]?.type
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