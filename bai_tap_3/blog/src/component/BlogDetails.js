import { useParams} from "react-router";
import {useEffect, useState} from "react";
import * as blogService from "../service/BlogService"
import {NavLink} from "react-router-dom";
function BlogDetail() {
    let param = useParams();
    const [blogUpdate, setBlogUpdate] = useState(null);
    useEffect(() => {
        const getDetail = async () => {
            const postDetail = await blogService.findById(param.id);
            setBlogUpdate(postDetail);
        };
        getDetail();
    }, [param.id]);

    if(!blogUpdate){
        return null;
    }
    return (
        <>
            <NavLink to='/' className='btn btn-primary'>List</NavLink>
            <h1>Detail Blog</h1>
            <table className='table table-primary' border='5px'>
                <tbody>
                <tr>
                    <th>id</th>
                    <th>{blogUpdate.id}</th>
                </tr>
                <tr>
                    <th>title</th>
                    <th>{blogUpdate.title}</th>
                </tr><tr>
                    <th>category</th>
                    <th>{blogUpdate.category}</th>
                </tr>

                <tr>
                    <th>time</th>
                    <th>{blogUpdate.time}</th>
                </tr>

                </tbody>

            </table>
        </>
    )
}

export default BlogDetail;