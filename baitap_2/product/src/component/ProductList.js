import {useEffect, useState} from "react";
import * as productService from "../service/ProductService"
function ProductList() {
    const [products, setProducts] = useState([])
    const [types,setTypes]=useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await productService.findALl()
            setProducts(rs)
            return products;
        }
        const getAllType = async ()=>{
            let rs = await productService.findAllType();
            setTypes(rs)
            return types;
        }
        getAll()
        getAllType()
    },[])
    return(
        <>
            <h1 className="text-center">List Product</h1>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DATE</th>
                    <th>PRODUCT TYPE</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.date}</td>
                            <td>
                                {
                                    types?.filter(pro =>pro.id == value.productType)[0]?.type
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
export default ProductList;