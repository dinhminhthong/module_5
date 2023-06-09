import * as employeeService from '../service/EmployeeService';
import {Formik, Form, Field} from "formik";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let result = await employeeService.findAll()
            setEmployees(result)
        }
        const getAllType = async () => {
            let result = await employeeService.findAllType()
            setTypes(result)
        }
        getAll()
        getAllType()
    }, []);
    const handleDelete = async (id)=>{
        await employeeService.remove(id)
        let rs = await employeeService.findAll();
        setEmployees(rs)
    }
    return (
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <Formik initialValues={{name: ''}}
                    onSubmit={(values) => {
                        const search = async () => {
                            let rs = await employeeService.findByName(values.name)
                            setEmployees(rs)
                        }
                        search()
                    }}>
                <Form>
                    <Field name='name' id='name' placeholder='search'/>
                    <button type='search' className='btn-primary btn'>Search</button>
                </Form>
            </Formik>
            <h1 className='text-center'>Employee List</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Type Employee</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.level}</td>
                            <td>
                                {
                                    types.filter(ems=>ems.id == value.typeEmployee)[0]?.type
                                }
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                            </td>
                            <td>
                                <Link to={`edit/${value.id}`} className='btn btn-primary'>Update</Link>
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
