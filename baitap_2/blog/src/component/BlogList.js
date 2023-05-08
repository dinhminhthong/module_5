import {useEffect, useState} from "react";
import * as blogService from "../service/BlogService"

function BlogList() {
    const [blog, setBlog] = useState([])
    const [type, setType] = useState([])
    useEffect(() => {
        const getAll = async () => {
            let result = await blogService.findAll()
            setBlog(result);
            return blog;
        }
        const getAllType = async () => {
            let result = await blogService.findAllType();
            setType(result);
            return type;
        }
        getAll();
        getAllType();
    }, [])
    return (
        <>
            <h1 className='text-center'>Blog List</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CONTENT</th>
                    <th>TYPE</th>
                </tr>
                </thead>
                <tbody>
                {
                    blog.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{value.title}</td>
                            <td>{value.content}</td>
                            <td>{
                                type.filter(bl => bl.id === value.typeBlog)[0]?.type
                            }
                            </td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

export default BlogList;