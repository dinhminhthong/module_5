import axios from "axios";

export const findAll = async (title = "")=>{
    try {
        let rs = await axios.get(`http://localhost:8000/posts?title_like=${title}`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/posts/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const save = async (posts)=>{
    try {
        await axios.post(`http://localhost:8000/posts`,{ ...posts })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/posts/${id}`))
    }catch (e) {
        console.log(e)
    }
}
export const update = async (posts) => {
    try {
        await axios.put(`http://localhost:8000/posts/${posts.id}`, { ...posts });
    } catch (e) {
        console.log(e);
    }
}