import React, {useEffect, useState} from "react";
import * as studentService from '../service/StudentService'
import {NavLink} from "react-router-dom";
import {Formik,Form,Field} from "formik";

function StudentList() {
    const [student,setStudent] = useState([])
    const [classs,setClass] = useState([])
    useEffect(()=>{
        const getAll = async ()=>{
            let rs = await studentService.findAll();
            setStudent(rs)
        }
        getAll()
    },[])
    useEffect(()=>{
        const getAllClass = async ()=>{
            let rs = await studentService.findAllClass()
            setClass(rs)
        }
        getAllClass()
    },[]);
    const handleDelete = async (id)=>{
        await studentService.remove(id)
        let rs = await studentService.findAll()
        setStudent(rs)
    }
    return (
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <Formik initialValues={{name:''}}
                    onSubmit={ (value)=>{
                        const search = async ()=>{
                            let rs = await studentService.searchByName(value.name)
                            setStudent(rs)
                        }
                        search()
                    }}>
                <Form>
                    <Field name='name'
                           type='search'
                           placeholder='search...'/>
                           <button type='submit' className='btn btn-primary'>Search</button>
                </Form>
            </Formik>
            <h1 className="text-center">List Student</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Point</th>
                    <th>Class Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    student.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.gender}</td>
                            <td>{value.point}</td>
                            <td>
                                {
                                    classs.filter(st=>st.id==value.className)[0]?.class
                                }
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                            </td>
                           <td> <NavLink to={`edit/${value.id}`} className='btn btn-primary'>Update</NavLink></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default StudentList