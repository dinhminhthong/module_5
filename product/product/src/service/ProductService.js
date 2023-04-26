import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/product`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () =>{
    try {
        let result = await  axios.get(`http://localhost:8000/productType`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const create = async (product) =>{
    try{
        await axios.post(`http://localhost:8000/product`,{ ...product })
        alert("thêm mới thành công")
        return product
    }catch (e) {
        console.log(e)
    }
}