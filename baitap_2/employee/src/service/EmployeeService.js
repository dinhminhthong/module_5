import axios from "axios";

export  const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8080/employees`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllLevel = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8080/levels`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (employee)=>{
    try {
        await axios.post(`http://localhost:8080/employees`,{ ...employee })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/employees/${id}`)
    }catch (e) {
        console.log(e)
    }
}