import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await  axios.get(`http://localhost:8000/products?_sort=quantity&_order=asc`)
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
export const save = async (product)=>{
    try {
        await axios.post(`http://localhost:8000/products`,{ ...product })
    }catch (e) {
        console.log(e)
    }
}
export const searchByName = async (name)=>{
    try {
        let rs = await axios.get(`http://localhost:8000/products?name_like=${name}&_sort=quantity&_order=asc`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const findById = async (id)=>{
    try {
        return (await axios.get(`http://localhost:8000/products/${id}`)).data
    }catch (e) {
        console.log(e)
    }
}
export const update = async (product)=>{
    try {
        await axios.put(`http://localhost:8000/products/${product.id}`,{...product })
    }catch (e) {
        console.log(e)
    }
}