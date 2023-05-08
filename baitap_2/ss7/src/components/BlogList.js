import {useEffect, useState} from "react";
import * as blogService from '../service/BlogService'

function BlogList() {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let result = await blogService.findAll()
            setBlog(result)
            return blog
        }
        getAll()
    }, [])
    return (
        <>
            <h1 className='text-center'>List Blog</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PHOTO</th>
                    <th>SLUG</th>
                    <th>CATEGORY</th>
                </tr>
                </thead>
                <tbody>
                {
                    blog.map((value,index)=>(
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

export default BlogList