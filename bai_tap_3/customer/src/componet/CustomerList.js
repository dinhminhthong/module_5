import * as customerService from '../service/CustomerService'
import React, {useEffect, useState} from "react";
import {Formik,Form,Field} from "formik";
import {Link, NavLink} from "react-router-dom";

function CustomerList() {
    const [customers, setCustomers] = useState([])
    const [types, setTypes] = useState([]);
    useEffect(() => {
        const getAll = async()=>{
            let rs = await customerService.findAll()
            setCustomers(rs)
        }
        getAll()
    },[])
    useEffect(()=>{
        const getAllType = async ()=>{
            let rs = await customerService.findAllType();
            setTypes(rs)
        }
        getAllType();
    },[])
    return (
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <br/>
            <br/>
           <Formik initialValues={{name:''}}
                   onSubmit={(values)=>{
                       const searchByName = async ()=>{
                           let rs = await customerService.findByName(values.name);
                           setCustomers(rs)
                       }
                       searchByName()
                   }} >
               <Form>
                   <label htmlFor="">Tìm kiếm</label>
                   <Field type="input" name="name"/>
                   <button type="submit" className="btn btn-primary btn-sm">Tìm kiếm</button>
               </Form>
           </Formik>
            <h1 className='text-center'>CustomerList</h1>
            <table className='table table-striped'>
                <thead className='table-danger'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Type Customer</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.date}</td>
                            <td>
                                {
                                    types.filter(cus=>cus.id == value.typeCustomer)[0]?.type
                                }
                            </td>
                            <td>
                                <Link to={`edit/${value.id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default CustomerList