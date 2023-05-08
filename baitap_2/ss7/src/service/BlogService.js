import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await axios.get(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (blog)=>{
    try {
        await axios.post(`https://my-json-server.typicode.com/sonpham1591996/cg-blogs/posts`,{ ...blog })
    }catch (e) {
        console.log(e)
    }
}