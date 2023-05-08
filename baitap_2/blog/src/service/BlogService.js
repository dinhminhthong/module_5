import axios from "axios";

export const findAll = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/blog`)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        let result = await axios.get(`http://localhost:8000/BlogType`)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (blog)=>{
    try {
        await axios.post(`http://localhost:8000/blog`,{ ...blog })
    }catch (e) {
        console.log(e)
    }
}