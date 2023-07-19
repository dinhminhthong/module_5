import axios from "axios";

export const findAll = async ()=>{
    let rs = await axios.get(`http://localhost:8080/api/product/list`)
    return rs.data
}
export const deTail = async ()=>{
    let rs = await axios.get(`http://localhost:8080/api/product-detail/{productId}`)
    return  rs.data;
}
export const searchNames = async (nameSearch)=>{
    let rs = await axios.get(`http://localhost:8080/api/product?`)
}