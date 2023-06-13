import * as productService from '../service/ProductService';
import {useEffect, useState} from "react";

function ProductList() {
    const [products, setProduct] = useState([])
    const [types, setTypes] = useState([])
    useEffect(()=>{
        const getAll = async ()=>{
            let result = await productService.findAll();
            setProduct(result)
        }
        getAll()
    },[]);
    useEffect(()=>{
        const getAllType = async ()=>{
            let result = await productService.findAllTypes();
            setTypes(result)
        }
        getAllType()
    },[]);
    const handleDelete = async (id)=>{
        await productService.remove(id)
        let rs = await productService.findAll();
        setProduct(rs)
    }
    return (
        <>
            <h1 className='text-center'>Danh sách sản phẩm </h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.date}</td>
                            <td>{value.quantity}</td>
                            <td>
                                {
                                    types.filter(pro=>pro.id == value.typeProduct)[0]?.name
                                }
                            </td>
                            <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default ProductList;