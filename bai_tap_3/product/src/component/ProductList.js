import * as productService from '../service/ProductService';
import React, {useEffect, useState} from "react";
import {Field,Formik,Form} from "formik";
import {Link} from "react-router-dom";
function ProductList() {
    const [products,setProducts] = useState([]);
    const [types,setTypes] = useState([]);
    useEffect(()=>{
        const getAll = async ()=>{
            let result = await productService.findAll();
            setProducts(result)
        }
        const getAllType = async ()=>{
            let result = await productService.findAllType()
            setTypes(result)
        }
        getAll();
        getAllType();
    },[]);
    const handleDelete = async (id)=>{
        await productService.remove(id);
        let result = await productService.findAll();
        setProducts(result);
    }
return(
    <>
        <Formik initialValues={{name:''}}
                onSubmit={(value)=>{
                    const searchByName = async ()=>{
                        let rs = await productService?.findAllSearch(value.name)
                        setProducts(rs)
                    }
                    searchByName();
                }}
        >
            <Form className='col-3'>
                <Field name='name' id='name'
                       placeholder='search'
                >
                </Field>
                <button className='btn btn-primary' type='submit'>Search</button>
            </Form>
        </Formik>
        <h1 className='text-center'>Product List</h1>
        <table className='table table-striped'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Color</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            {
                products.map( (value,index)=>(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{value.name}</td>
                        <td>{value.color}</td>
                        <td>
                            {
                                types.filter(pro=>pro.id == value.typeProduct)[0]?.type
                            }
                        </td>
                        <td> <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button></td>
                        <td><Link to={`/edit/${value.id}`} className='btn btn-primary'>Edit</Link></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </>
)
}
export default ProductList;