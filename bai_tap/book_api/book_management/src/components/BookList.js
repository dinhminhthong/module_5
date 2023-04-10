import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import * as bookService from "../service/BookService";

function BookList() {
    const [books, setBooks] = useState([])
    const [typeBooks, setTypeBooks] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getAll = async () => {
            const result = await bookService.findAll()
            setBooks(result);
            return books
        }
        const bookType = async () => {
            let result = await bookService.findAllType()
            setTypeBooks(result)
            return  typeBooksx``
        }
        getAll();
        bookType();
    }, []);

    return (
        <>
            <h1> Book List</h1>
            <table className="table-striped">
                <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>NAME</th>
                    <th scope='col'>AUTHOR</th>
                    <th scope='col'>TYPEBOOK</th>
                    <th scope='col'>PRICE</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((value, index) => (
                            <tr key={index}>
                                <td>{value.name}</td>
                                <td>{value.author}</td>
                                <td>{value.price}</td>
                                <td>
                                    {
                                        typeBooks.filter(bt => bt.id === value.typeId)[0]?.name
                                    }
                                </td>
                            </tr>

                        )
                    )
                }
                </tbody>
            </table>
        </>
    )

}

export default BookList;