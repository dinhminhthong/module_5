import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then((res) => {
                setTodos(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <h1>TodoList</h1>
            <table className='table'>
                <thead>
                <tr>
                    <th scope='col'>Index</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Author</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((value, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{value.title}</td>
                        <td>{value.author}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;
