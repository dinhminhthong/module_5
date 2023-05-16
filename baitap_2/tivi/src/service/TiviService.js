import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/tivis`)
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
export const save = async (tivi)=>{
    try {
        await axios.post(`http://localhost:8000/tivis`, { ...tivi })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/tivis/${id}`)
    }catch (e) {
        console.log(e)
    }
}