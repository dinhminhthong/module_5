import {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
function BookList() {
    const [book,setBoook]= useState([]);
    const [type,setType]=useState([])

    useEffect( ()=>{
        let getAll = async () =>{
            let result = await bookService.findAll();
            setBoook (result)
            return book
        }
        let getALLTypes = async ()=>{
            let result = await bookService.findAllType();
            setType (result)
            return type;
        }
        getAll();
        getALLTypes();
    },[])
    return(
        <>
            <h1 className='text-center'>List Book</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Loại Sách</th>
                    <th>Ngày suất bản</th>
                    <th>Tác giả</th>
                </tr>
                </thead>
<tbody>
{
    book.map( (value,index)=>(
        <tr key={index}>
            <td>{index}</td>
            <td>{value.name}</td>
            <td>{
                type.filter(bo =>bo.id === value.typeBookId)[0]?.type
            }</td>
            <td>{value.date}</td>
            <td>{value.author}</td>
        </tr>
    ))
}
</tbody>
            </table>
            </>
    )

}
export default BookList;