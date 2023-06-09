import * as postsService from '../service/PostsService'
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function PostsList() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        const getAll = async ()=>{
            let result = await postsService.findAll();
            setPosts(result)
        }
        getAll()
    },[])
    return(
        <>
            <NavLink to='/create' className='btn btn-primary'>Create</NavLink>
            <h1 className='text-center'>Post List</h1>
            <table className='table table-striped '>
                <thead className='table-danger'>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>thumbnail_url</th>
                    <th>slug</th>
                    <th>category</th>
                </tr>
                </thead>
                <tbody>
                {
                    posts.map((value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.title}</td>
                            <td>{value.thumbnail_url}</td>
                            <td>{value.slug}</td>
                            <td>{value.category}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            </>
    )
}
export default PostsList