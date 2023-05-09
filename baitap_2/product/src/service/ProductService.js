import axios from "axios";

export const findALl = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/products`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let result = await  axios.get(`http://localhost:8000/typeProduct`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (product)=>{
    try {
        await axios.post(`http://localhost:8000/products`,{ ...product })
    }catch (e) {
        console.log(e)
    }
}