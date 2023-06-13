import * as phoneService from '../service/PhoneService'
import React, {useState} from "react";
import {Formik,Form,Field} from "formik";
import {Link, NavLink} from "react-router-dom";

function PhoneList() {
    const [phones,setPhones] = useState([])
    const [types,setTypes] = useState([])
    useState( ()=>{
        const getAll = async ()=>{
            let rs = await phoneService.findAll();
            setPhones(rs)
        }
        const getAllType = async ()=>{
            let rs = await phoneService.findAllType();
            setTypes(rs)
        }
        getAll()
        getAllType()
    },[]);
    const handleDelete = async (id)=>{
        await phoneService.remove(id)
        let rs = await phoneService.findAll()
        setPhones(rs)
    }
    return(


        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <br/>
            <br/>
            <Formik initialValues={{name:''}}
                    onSubmit={(value)=>{
                        const search = async() =>{
                            let rs = await phoneService.searchByName(value.name)
                            setPhones(rs)
                        }
                        search()
                    }}
            >
                <Form>
                    <Field name='name'
                           type='search'
                           placeholder='search...'/>
                           <button type='search' className='btn btn-primary'>Search</button>
                </Form>
            </Formik>
            <h1 className='text-center'>List Phone</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Type phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    phones.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{value.color}</td>
                            <td>{value.quantity}</td>
                            <td>
                                {
                                    types.filter(ph=>ph.id == value.typePhone)[0]?.type
                                }
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
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
export default PhoneList;