import {useEffect, useState} from "react";
import * as postsService from "../service/PostsService"
function PostList() {
    const [post,setPost]=useState([])
    useEffect( ()=>{
            const getAll = async ()=>{
                const result =await postsService.findAll();
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
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>
    )

}
export default PostList;