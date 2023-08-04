import axios from "axios";

export const findAll = async ()=>{
    try {
       let rs =  await axios.get(`http://localhost:8080/api/product/list`);
       return rs.data
    }catch (e) {
        console.log(e)
    }
}
export const detail = async (productId)=>{
    try {
        let rs = await axios.get(`http://localhost:8080/api/product-detail/${productId}`)
        return  rs.data;
    }catch (e) {
        console.log(e)
    }
}
export const searchName = async (nameSearch)=>{
    let rs = await axios.get(`http://localhost:8080/api/product?nameSearch=${nameSearch}`)
    return rs.data
}
