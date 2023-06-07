import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/employees`)
        return rs.data
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
export const findByName = async (name)=>{
    try {
        let rs = await axios.get(`http://localhost:8000/employees?name_like=${name}`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (employee)=>{
    try {
        await axios.post(`http://localhost:8000/employees`,{ ...employee })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/employees/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/employees/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (employee)=>{
    try {
        await axios.put(`http://localhost:8000/employees/${employee.id}`,{ ...employee })
    }catch (e) {
         console.log(e)
    }
}