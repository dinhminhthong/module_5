import axios from "axios";

export const findAll = async (name)=>{
    try {
        if (name===null){name=''}
        let result = await  axios.get(`http://localhost:8000/products?name_like:${name}`)
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
export const save = async (product)=>{
    try {
        await axios.post(`http://localhost:8000/products`,{ ...product })
    }catch (e) {
        console.log(e)
    }
}
export const remove = async (id)=>{
    try {
        await axios.delete(`http://localhost:8000/products/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        await axios.get(`http://localhost:8000/products/${id}`)
    }catch (e) {
        console.log(e)
    }
}
export const updateProduct = async (product)=>{
    try {
        await axios.put(`http://localhost:8000/products`, { ...product })
    }catch (e) {
        console.log(e)
    }
}