import * as productService from "../service/ProductService";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Field,Form,Formik} from "formik";

function ProductList() {
    const [products, setProducts] = useState([])
    const [types, setTypes] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const getAll = async () => {
            let rs = await productService.findAll();
            setProducts(rs)
        }
        const getAllType = async () => {
            let rs = await productService.findAllType();
            setTypes(rs)
        }
        getAll();
        getAllType();
    }, [])
    const handleDelete = async (id) => {
        await productService.remove(id)
        let rs = await productService.findAll();
        setProducts(rs)
    }
    return (

        <>
            <h1 className='text-center'>Product List</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Tính năng</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.date}</td>
                            <td>{value.soLuong}</td>
                            <td>
                                {
                                    types.filter(pr => pr.id == value.typeProduct)[0]?.type
                                }
                            </td>
                            <td>
                                <a className='btn btn-danger m-3' onClick={() => handleDelete(value.id)}>Delete</a>
                                <button className="btn btn-primary">Update</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default ProductList;