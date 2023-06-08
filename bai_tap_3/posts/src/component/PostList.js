import * as postsService from "../service/PostsService";
import {Formik,Form,Field} from "formik";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
function PostList() {
    const [posts,setPosts] = useState([])
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs  = await postsService.findAll();
            setPosts(rs)
        }
        getAll()
    },[]);
    const handleDelete = async (id)=>{
        await postsService.remove(id);
        let result = await postsService.findAll();
        setPosts(result)
    }
    return(
        <>
            <Formik initialValues={{title:""}}
                    onSubmit={ (values)=>{
                       const searchByTitle = async ()=>{
                           let result = await postsService.findAll(values.title)
                           setPosts(result)
                       }
                       searchByTitle();
                    }}
                    >
                <Form className="col-4">
                    <Field name="title"
                           id="title"
                    placeholder="Search..."/>

                    <button className='btn btn-primary' type="submit">Search</button>
                </Form>
            </Formik>
            <NavLink className='btn btn-primary' to='/create'>Create</NavLink>
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
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>Delele</button>
                            </td>
                            <td><Link to={`/edit/${value.id}`} className='btn btn-primary'>Edit</Link></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
export default PostList;