import {Formik, Form, Field} from "formik";
import * as bookService from "../service/BookService";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
function BookList() {
    const [books, setBooks] = useState([]);
    const [type, setType] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            let result = await bookService.findAll();
            setBooks(result)
        }
        const getAllType = async () => {
            let result = await bookService.findAllType();
            setType(result)
        }
        getAll()
        getAllType()
    },[]);
    const handleDelete = async (id)=>{
        await bookService.remove(id);
        let rs = await bookService.findAll();
        setBooks(rs)
    }
    return (
        <>
            <NavLink className='btn btn-primary' to='/create'>Create</NavLink>
            <Formik initialValues={{name:''}}

                    onSubmit={(values)=>{
                        const searchByName = async ()=>{
                            let result = await bookService?.findSearchByName(values.name)
                            setBooks(result)
                        }
                        searchByName()
                    }}>
                <Form>
                    <Field id='name'
                           name='name'
                           placeholder ='search'>
                    </Field>
                    <button className='btn btn-primary' type='submit'>Search</button>
                </Form>
            </Formik>
            <h1 className='text-center'>List Book</h1>
                <table className='table table-striped'>
                    <thead>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Authur</th>
                       <th>Type Book</th>
                   </tr>
                    </thead>
                    <tbody>
                    {
                        books.map( (value,index)=>(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{value.name}</td>
                                <td>{value.authur}</td>
                                <td>
                                    {
                                        type.filter(bk=>bk.id == value.typeBook)[0]?.type
                                    }
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                                </td>
                                <td>
                                    <Link to={`/edit/${value.id}`} className='btn btn-primary'>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
        </>
    )
}
export default BookList;