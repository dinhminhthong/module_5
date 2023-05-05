import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/posts`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const save = async (posts) => {
    try {
        await axios.post(`http://localhost:8000/posts`, {...posts})
    } catch (e) {
        console.log(e)
    }
}
export const remove = async (id) =>{
    try {
        await axios.delete(`http://localhost:8000/posts/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const edit = async (post) =>{
    try {
        await axios.put(`http://localhost:8000/post/${post.id}`, { ...post })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return ( await axios.get(`http://localhost:8000/post/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}