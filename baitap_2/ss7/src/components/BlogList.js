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

        </>
    )
}

export default BlogList