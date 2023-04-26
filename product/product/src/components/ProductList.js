import {useEffect, useState} from 'react';
import * as productService from "../service/ProductService";


function ProductList() {
    const [products, setProducts] = useState([]);
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const result = await productService.findAll()
            setProducts(result);
            return products
        }
        const productType = async () => {
            let result = await productService.findAllType();
            setTypes(result)
            return types
        }
        getAll();
        productType();
    }, []);

    return (
        <>
            <h1>Book List</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <td scope='col'>ID</td>
                    <td scope='col'>NAME</td>
                    <td scope='col'>TYPE PRODUCT</td>
                </tr>
                </thead>
                <tbody>
                {
                    products.map( (value, index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>
                                {
                                    types.filter(pr => pr.id === value.idType)[0]?.type
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
export default ProductList