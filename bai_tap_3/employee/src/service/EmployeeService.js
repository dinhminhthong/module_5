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