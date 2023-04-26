import {useEffect, useState} from "react";
import * as customerService from "../service/CustomerService"

function CustomerList() {
        const [customers,setCustomers] = useState([])
        const [types,setTypes] = useState([])
    useEffect( ()=>{
        const getAll =async ()=>{
            const result = await customerService.findAll()
            setCustomers(result)
            return customers
        }
        const getType =async ()=>{
            const result = await customerService.findAllType()
            setTypes(result)
            return types
        }
        getAll()
        getType()
    },[])
    return (
        <>
            <h1>List customer</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>NAME</th>
                    <th>Email</th>
                    <th>Loại khách</th>
                </tr>
                </thead>
                <tbody>
                {
                    customers.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>
                                {
                                    types?.filter( cus =>cus.id === value.customerTypeId)[0]?.type
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
export default CustomerList;