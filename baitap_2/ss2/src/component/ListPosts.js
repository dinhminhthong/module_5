import {useEffect, useState} from "react";
import * as postsService from "../service/PostsService"
import {useNavigate} from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";
function PostList() {
    let navigate =useNavigate()
    const [post,setPost]=useState([])
    const [deleteId,setDeleteId]=useState(0)
    const [deleteName,setDeleteName]=useState("")

    useEffect( ()=>{
            const getAll = async ()=>{
                const result = await postsService.findAll();
                setPost (result)
                return post
            }
            getAll()
    },[])
    return (
        <>
            <h1 className="text-center">List Posts</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>CATEGORY</th>
                <th>TIME</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    post.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.time}</td>
                            <td border="1"><button style={{textDecoration: "none"}} className='btn btn-warning'>
                                <NavLink to={`edit/${value.id}`}>
                                    Edit
                                </NavLink>
                            </button>
                                <button className='btn btn-warning'>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>
    )

}
export default PostList;