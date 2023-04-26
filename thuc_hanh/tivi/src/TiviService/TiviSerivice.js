import axios from "axios";

export const findAll = async ()=>{
    try {
        let result = await  axios.get(`http://localhost:8000/tivi`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const findAllType = async ()=>{
    try {
        let result = await axios.get(`http://localhost:8000/tiviType`)
        return  result.data
    }catch (e) {
        console.log(e)
    }
}