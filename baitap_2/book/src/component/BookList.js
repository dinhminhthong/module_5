import * as bookService from "../service/BookService"
import {useEffect, useState} from "react";
function BookList() {
    const [books,setBook] = useState([]);
    const [types,setType] = useState([]);
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await bookService.findAll();
            setBook(rs);
        }
        const getAllType = async ()=>{
            let rs = await bookService.findAllType();
            setType(rs)
        }
         getAll();
        getAllType();
    },[]);
    const handleDelete = async (id) => {
        await bookService.remove(id);
        let result = await  bookService.findAll();
        debugger;
        setBook(result);
    };

    return(
        <>
            <h1 className='text-center'>List Book</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>TYPE</th>
                    <th>AUTHOR</th>
                </tr>
                </thead>
                <tbody>
                {
                    books?.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>
                                {
                                    types?.filter( bo => bo.id == value.typeBook)[0]?.type
                                }
                            </td>
                            <td>{value.author}</td>
                            <td>
                                <a className='btn btn-danger' onClick={() => handleDelete(value.id)}>DELETE</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>
    )
}
export default BookList;