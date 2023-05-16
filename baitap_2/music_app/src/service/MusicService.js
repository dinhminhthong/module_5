import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/musics`)
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
export const save = async (music)=>{
    try {
        await axios.post(`http://localhost:8000/musics`,{ ...music })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/musics/${id}`)
    }catch (e) {
        console.log(e)
    }
}