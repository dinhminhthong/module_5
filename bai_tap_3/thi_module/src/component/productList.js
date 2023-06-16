import React, {useEffect, useState} from "react";
import * as productService from '../service/ProdcutService'

function ProductList() {
    const [products, setProducts] = useState([])
    const [types, setTypes] = useState([])
    useEffect(() => {
        const getAll = async () => {
            try {
                let rs = await productService.findAll();
                console.log(rs);
                setProducts(rs);
            } catch (error) {
                console.log(error);
            }
        };

        const getAllType = async () => {
            try {
                let rs = await productService.findAllType();
                setTypes(rs);
            } catch (error) {
                console.log(error);
            }
        };

        getAll();
        getAllType();
    }, []);
    return (
        <>

            <h1 className='text-center'>List Product</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Thể loại</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Ngày nhập</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.code}</td>
                            <td>{value.name}</td>
                            <td>{value.moTa}</td>
                            <td>{
                                types.filter(pro => pro.id === value.typeProduct)[0]?.type
                            }</td>
                            <td>{value.price}</td>
                            <td>{value.quantity}</td>
                            <td>{value.date}</td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default ProductList;