import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/phones?_sort=quantity&_order=asc`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType =async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/types`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const searchByName = async (name)=>{
    try {
        let rs = await axios.get(`http://localhost:8000/phones?name_like=${name}`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (phone)=>{
    try {
        await axios.post(`http://localhost:8000/phones`,{ ...phone })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/phones/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (phone)=>{
    try {
        await axios.put(`http://localhost:8000/phones/${phone.id}`,{ ...phone })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/phones/${id}`)
    }catch (e) {
        console.log(e)
    }
}