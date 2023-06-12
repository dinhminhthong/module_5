import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/students?_sort=point_&order=desc`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllClass = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/class`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (student)=>{
    try {
        await axios.post(`http://localhost:8000/students`,{ ...student })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await  axios.delete(`http://localhost:8000/students/${id}`)
    }catch (e) {

    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/students/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (student)=>{
    try {
        await axios.put(`http://localhost:8000/students/${student.id}`,{ ...student })
    }catch (e) {
        console.log(e)
    }
}
export const searchByName = async (name)=>{
    try {
        let  rs = await axios.get(`http://localhost:8000/students?name_like=${name}`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}