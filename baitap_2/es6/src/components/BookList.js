import {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
function BookList() {
    const [book, setBook]= useState([])
    const [type,setType] = useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            let result = await bookService.findAll();
            setBook (result)
            return book;
        }
        const getAllType = async ()=>{
            let result = await bookService.findAllType()
            setBook (result)
            return type;
        }
        getAll();
        getAllType();
    },[])
    return (
        <>
            <h1 className='text-center'>LIST BOOK</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>TYPE BOOK</th>
                    <th>AUTHOR</th>
                    <th></th>
                </tr>
                </thead>
            </table>
            </>
    )

}
export default BookList;