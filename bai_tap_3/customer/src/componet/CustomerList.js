import * as customerService from '../service/CustomerService'
import React, {useEffect, useState} from "react";
import {Formik,Form,Field} from "formik";

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
           <Formik initialValues={{name:''}}
                   onSubmit={(values)=>{
                       const searchByName = async ()=>{
                           let rs = await customerService.findByName(values.name);
                           setCustomers(rs)
                       }
                       searchByName()
                   }} >
               {/*<Form>*/}
               {/*    <Field name='name'*/}
               {/*           id='name'*/}
               {/*           placeholder='search'/>*/}
               {/*           <button type='submit' className='btn btn-primary'>Search</button>*/}
               {/*</Form>*/}
               <Form>
                   <label htmlFor="">Tìm kiếm</label>
                   <Field type="input" name="name"/>
                   <button type="submit" className="btn btn-primary btn-sm">Tìm kiếm</button>
               </Form>
           </Formik>
            <h1 className='text-bg-light'>CustomerList</h1>
            <table className='table table-striped'>
                <thead className='table-danger'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Type Customer</th>
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
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default CustomerList