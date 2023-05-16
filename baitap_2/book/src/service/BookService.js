import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await  axios.get(`http://localhost:8000/books`)
        return rs.data;
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/types`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (book)=>{
    try {
        await axios.post(`http://localhost:8000/books`,{ ...book })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/books/${id}`)
    }catch (e) {
        console.log(e)
    }
}