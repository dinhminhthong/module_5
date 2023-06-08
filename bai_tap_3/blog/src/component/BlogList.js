import * as blogService from '../service/BlogService';
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Formik,Form,Field} from "formik";

function BlogList() {
    const [blogList,setBlogList] = useState([]);
    const [idDelete,setIdDelete] = useState()
    useEffect( ()=>{
        const getAll = async ()=>{
            let rs = await blogService.findAll()
            setBlogList(rs)
        }
        getAll()
    },[]);
    function handleDelete(id) {
        setIdDelete(id)
    }

    async function deletePost() {
        await blogService.remove(idDelete)
        let rs = await blogService.findAll();
        setBlogList(rs)
    }
    return(
        <>
            <NavLink className='btn btn-primary' to='/create'>Create</NavLink>

            <Formik initialValues={{title:''}}
                    onSubmit={(values)=>{
                        const search = async ()=>{
                            let result = await blogService.findByName(values.title)
                            setBlogList(result)
                        }
                        search()
                    }}>
                <Form>
                    <Field name ="title"
                           id = "title"
                           placeholder='search'/>

                    <button type='submit' className='btn btn-primary'>Search</button>

                </Form>
            </Formik>

            <h1 className='text-center'>Blog List</h1>
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
                    blogList.map((value,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.title}</td>
                            <td>{value.category}</td>
                            <td>{value.time}</td>
                            <td><Link to={`/edit/${value.id}`} className='btn btn-primary'>Edit</Link></td>
                            <td><button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal" onClick={() => handleDelete(value.id)}>
                                Delete
                            </button></td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
            {/*modal*/}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close">

                            </button>
                        </div>
                        <div className="modal-body">
                            Delete {idDelete}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deletePost}>Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}
export default BlogList;