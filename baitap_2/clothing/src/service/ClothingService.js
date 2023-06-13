import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await  axios.get(`http://localhost:8000/clothings`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllTypes = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/types`)
        return rs.data;
    }catch (e) {
        console.log(e)
    }
}
export const save = async (clothing)=>{
    try {
        await axios.post(`http://localhost:8000/clothings`,{ ...clothing })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
     await axios.delete(`http://localhost:8000/clothings/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        await  axios.get(`http://localhost:8000/cl`)
    }catch (e) {
        console.log(e)
    }
}