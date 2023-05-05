import {useEffect, useState} from "react";
import * as sachService from "../service/BookService";

function BookList() {
    const [book, setBook] = useState([]);
    const [type, setType] = useState([]);

    useEffect(() => {
        const getAll = async () => {
            let result = await sachService.findAll();
            setBook(result)
            return book;
        }
        const getAllType = async () => {
            let result = await sachService.findAllType();
            setType(result)
            return type
        }
        getAll();
        getAllType()
    },[])
    return (
        <>
            <h1 className='text-center'>List Book</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>TYPE</td>
                    <td>DATE</td>
                    <td>SO LUONG</td>
                </tr>
                </thead>
                <tbody>
                {

                }
                </tbody>
            </table>
            </>
    )

}

export default BookList