import * as postsService from "../service/PostsService"
import {useEffect, useState} from "react";
function PostList() {
    const [posts,setPosts] = useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs  = await postsService.findAll();
            setPosts(rs)
        }
        getAll()
    },[])
    return(
        <>
            <h1 className='text-center'>List Posts</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map( (value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.time}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default PostList;