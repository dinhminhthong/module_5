import axios from "axios";

export const findAll = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8080/products`)
        return rs.data.content
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let rs = await axios.get(`http://localhost:8080/productTypes`)
        return rs.data
    }catch (e) {
        console.log(e)
    }
}
// export const save = async (product)=>{
//     try {
//         await axios.post(`http://localhost:8000/products`,{ ...product })
//     }catch (e) {
//         console.log(e)
//     }
// }
// export const searchByName = async (name,typeProduct)=>{
//     try {
//         return (await axios.get(`http://localhost:8000/products?name_like=${name}&typeProduct_like=${typeProduct}&_sort=name&_order=asc`)).data
//     }catch (e) {
//         console.log(e)
//     }
// }
// export const remove = async (id)=>{
//     try {
//         await axios.delete(`http://localhost:8000/products/${id}`)
//     }catch (e) {
//         console.log(e)
//     }
// }