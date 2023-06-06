import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/books`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/types`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findSearchByName = async (name)=>{
    try {
        let result = await axios.get(`http://localhost:8000/books?name_like=${name}`)
        return result.data
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
        await  axios.delete(`http://localhost:8000/books/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
       return (await axios.get(`http://localhost:8000/books/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (book)=>{
    try {
        await axios.put(`http://localhost:8000/books/${book.id}`,{ ...book })
    }catch (e) {
        console.log(e)
    }
}





