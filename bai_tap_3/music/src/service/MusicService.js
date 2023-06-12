import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8000/music`)
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
export const searchByName = async (name)=>{
    try {
        let result = await axios.get(`http://localhost:8000/music?name_like=${name}`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (music)=>{
    try {
        await axios.post(`http://localhost:8000/music`,{ ...music })
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/music/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (music)=>{
    try {
        await axios.put(`http://localhost:8000/music/${music.id}`,{ ...music })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/music/${id}`)
    }catch (e) {
        console.log(e)
    }
}