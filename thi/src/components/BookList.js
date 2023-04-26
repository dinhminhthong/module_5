import {useEffect, useState} from "react";
import * as sachService from "../service/BookService";

function BookList() {
    const [books,setBooks]=useState([])
    const [types,setTypes] = useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            const result = await sachService.findAll()
            setBooks (result)
            return books
        }
        const getType = async ()=>{
            const result =await sachService.findAllType()
            setTypes (result)
            return types
        }
        getAll();
        getType();
    },[])
    return (
        <>
            <h1 className='text-center'>List Book</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th className='col'>MÃ SÁCH</th>
                    <th className='col'>TÊN SÁCH</th>
                    <th className='col'>THỂ LOẠI</th>
                    <th className='col'>NGÀY NHẬP SÁCH</th>
                    <th className='col'>SỐ LƯỢNG</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map( (value,index) =>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>
                                {
                                        types?.filter(bk =>bk.id === value.bookTypeId)[0]?.type
                                    }
                                </td>
                                <td>{value.date}</td>
                                <td>{value.soLuong}</td>
                        </tr>

                    ))
                }
                </tbody>
            </table>
            </>
    )
}
export default BookList