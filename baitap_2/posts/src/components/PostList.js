import {useEffect, useState} from "react";
import * as postService from "../service/PostServie";
import ModalDelete from "../../../ss2/src/component/ModalDelete";

function PostList() {
    const [postList, setPostList] = useState([])
    const [deleteId, setDeleteId] = useState(0)
    const [deleteName, setDeleteName] = useState("")
    useEffect(() => {
        const getAll = async () => {
            let result = await postService.findAll();
            setPostList(result)
            return postList;
        }
        getAll();
    }, []);
    const handleEdit = (id) => {
        navigate(`/update/${id}`)
    }
    const getIdAndTitle = (id, name) => {
        setDeleteId(id)
        setDeleteName(name)
    }
    let count = 1
    return (
        <>
            <h1 className='text-center'>List post</h1>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>SLUG</th>
                    <th>CATEGORY</th>
                    <th>CONTENT</th>
                    <th>UPDATEAT</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                {
                    postList.map((value, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td className='col-3'>{value.title}</td>
                            <td className='col-3'>{value.slug}</td>
                            <td className='col-3'>{value.category}</td>
                            <td className='col-3'>{value.content}</td>
                            <td className='col-3'>{value.updatedAt}</td>
                            <td>
                                <button className='btn btn-danger'>DELETE</button>
                            </td>
                            <td>
                                <button className='btn btn-primary'>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <ModalDelete
                id={deleteId}
                name={deleteName}
                getList={
                    () => {
                        console.log('getList')
                        const result = async () => {
                            const rs = await postList.findAll('')

                            setPostList(rs)
                        }
                        result()
                    }
                }
            />
        </>
    )

}

export default PostList;