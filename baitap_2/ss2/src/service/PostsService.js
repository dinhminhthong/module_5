import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/post`)
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const save = async (post)=>{
    try {
        await  axios.post(`http://localhost:8000/post`,{ ...post })
    }catch (e) {
        console.log(e)
    }
}
export const update = async (post) =>{
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
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/post/${id}`)
    }catch (e) {
        console.log(e)
    }
}