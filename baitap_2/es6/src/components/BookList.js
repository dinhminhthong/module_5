import {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
function BookList() {
    const [book,setBook] = useState([]);
    const [type,setType]= useState([]);
    useEffect( ()=>{
        const getAll = async ()=>{
            const result =await bookService.findAll();
            setBook(result);
            return  book;
        }
        const getAllType = async ()=>{
            const result = await bookService.findAllType();
            setType (result);
            return type;
        }
        getAll();
        getAllType();
    },[])

    return(
        <>
            <h1 className='text-center'>Book List</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>TYPE BOOK</th>
                        <th>DATE</th>
                        <th>AUTHOR</th>
                    </tr>
                </thead>
                <tbody>
                {
                    book.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>
                                {
                                    type?.filter(bo =>bo.id===value.typeBookId)[0]?.type
                                }
                            </td>
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