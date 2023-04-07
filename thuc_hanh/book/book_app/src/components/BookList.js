import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as BookService from "../service/BookService";
function BookList() {
    const [books, setBook] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
            axios.get(`http://localhost:8000/book`)
            .then((res) => {
                    setBook(res.data)
                }
            )
            .catch(err => {
                console.log(err)
            })

    },[]);
    const handleDelete = async (id) => {
        console.log(id)
        try {
            await BookService.deleteBook(id);

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1> List Book</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th className="col">ID</th>
                    <th className="col">NAME</th>
                    <th className="col">AUTHOR</th>
                    <th className="col">PRICE</th>
                    <th className="col">CHỨC NĂNG</th>
                </tr>
                </thead>
                <tbody>
                {
                    books.map((value, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{value.name}</td>
                                <td>{value.author}</td>
                                <td>{value.author}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delete</button>
                                </td>
                                <td>
                                    <NavLink className='btn btn-primary'to={`/edit/${value.id}`} >Edit</NavLink>
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