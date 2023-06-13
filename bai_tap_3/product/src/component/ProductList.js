import * as productService from '../service/ProductSerivce'
import React, {useEffect, useState} from "react";
import {NavLink,Link} from "react-router-dom";
import {Formik, Form, Field} from "formik";

function ProductList() {
    const [products, setProducts] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let rs = await productService.findAll();
            setProducts(rs)
        }
        const getAllType = async () => {
            let rs = await productService.findAllType();
            setTypes(rs)
        }
        getAll()
        getAllType()
    }, [])
    return (
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <br/>
            <br/>
            <Formik initialValues={{name: ''}}
                    onSubmit={(value) => {
                        const search = async () => {
                            let rs = await productService.searchByName(value.name)
                            setProducts(rs)
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
            <h1 className='text-center'>Product List</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Date</th>
                    <th>Type product</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((value, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{value.color}</td>
                            <td>{value.quantity}</td>
                            <td>{value.date}</td>
                            <td>
                                {
                                    types.filter(pro => pro.id == value.typeProduct)[0]?.type
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

export default ProductList